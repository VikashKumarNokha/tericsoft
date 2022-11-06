import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  "../styles/AdminPage.css"
import { getAdminData } from '../redux/admin/action'
import { deleteAdminData } from '../redux/admin/action'
import { postAdminData } from '../redux/admin/action'
import { editAdminData } from '../redux/admin/action'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export const AdminPage = () => {
       const dispatch = useDispatch();
       const adminData = useSelector((state)=>state.AdminReducer.admindata);
        
       const [hobbies, setHobbies] = useState("");
       const [dob, setDOB] = useState("");
       const [gender, setGender] = useState("");
       const [name, setName] = useState("");
       const [email, setEmail]  = useState("");
       const [ phone, setPhone] = useState("");       

       const [modalDisplay , setModalDisplay] = useState("");
       const [editGender, setEditGender] = useState("");
       const [editID, setEditID] = useState(0);

       useEffect(()=>{
              if(adminData.length === 0){
                 dispatch(getAdminData());
              }  
       },[dispatch]);

         const handleDelete = (Id) =>{
                dispatch(deleteAdminData(Id)).then(()=>{
                    dispatch(getAdminData());
                })
         }

         const addAdminData =()=>{
               
                 const payload ={
                  "name":  name,
                  "email": email,
                  "phone": phone ,
                  "gender": gender,
                  "hobbies": hobbies,
                  "dob": dob,
                 }
                 dispatch(postAdminData(payload)).then(()=>{
                    dispatch( getAdminData());
                 })  
         }

         const editHandler = (Id) =>{
             const payload = {
              "gender": editGender ,   
             }
               console.log("iddd",Id);
              dispatch(editAdminData(Id,payload)).then(()=>{
                    dispatch(getAdminData());
              })

         };
        
       console.log("daatat", adminData);
     
  return (
    <div>
      
        <div>
               <h2>ADD EMPlOYEE</h2>
               <input onChange={(e)=>setName(e.target.value)} type="text"  placeholder='Name'/> <br />
              <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' /><br />
              <input onChange={(e)=>setPhone(e.target.value)} type="number"  placeholder='phone'/><br />
              <input onChange={(e)=>setDOB(e.target.value)} type="date" placeholder='D O B' /><br />
            <select onChange={(e)=>setHobbies(e.target.value)} name="" id="">
              <option value="">Slect Hobbies</option>
              <option value="cricket">Cricket</option>
              <option value="Reading Book">Reading Book</option>
              <option value="Dance">Dance</option>
            </select><br /> <br/>
             <form onChange={(e)=>setGender(e.target.value)} action="">
               <label htmlFor="">   Select Gender </label><br />
                <input type="radio" name='gender' value="Male" />
                <label htmlFor="gender">Male</label>
                <input type="radio"  name='gender' value= "Female"/>
                <label htmlFor="gender">Female</label>
             </form>          
                <button onClick={()=>addAdminData()} >Add Employee</button> <br /> <br />
              
        </div>
         

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >ID</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">EMAIL </StyledTableCell>
            <StyledTableCell align="right">PHONE</StyledTableCell>
            <StyledTableCell align="right">DOB</StyledTableCell>
            <StyledTableCell align="right">GENDER </StyledTableCell>
            <StyledTableCell align="right">HOBBIES</StyledTableCell>
            <StyledTableCell align="right">EDIT</StyledTableCell>
            <StyledTableCell align="right">DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { adminData.length >0 && adminData.map((e,i)=>(
            <StyledTableRow key={e.id}>
              <StyledTableCell component="th" scope="row">
                {i+1}
              </StyledTableCell>
              <StyledTableCell align="right">{e.name}</StyledTableCell>
              <StyledTableCell align="right">{e.email}</StyledTableCell>
              <StyledTableCell align="right">{e.phone}</StyledTableCell>
              <StyledTableCell align="right">{e.dob}</StyledTableCell>
              <StyledTableCell align="right">{e.gender}</StyledTableCell>
              <StyledTableCell align="right">{e.hobbies}</StyledTableCell>
              <StyledTableCell  cursor="pointer" align="right">
              <div onClick={()=>{setModalDisplay("block"); setEditID(e.id)}}  style={{cursor : "pointer"}} > Edit </div> 
                    
                    <div  style={{display : `${modalDisplay ? "block": ""}`}}  id="myModal" className="modal">
                      {/* <!-- Modal content --> */}
                       <div className="modal-content">
                         <span onClick={()=>setModalDisplay("")}   className="close">&times;</span>
                         <p>Edit Admin Data</p>
                           <select onChange={(e)=>setEditGender(e.target.value)}  name="" id="">
                             <option value="">Change Gender</option>
                             <option value="Male"> Male</option>
                             <option value="Female">Female</option>
                           </select> <br /> <br />
                            <button onClick={()=>{ editHandler(editID); console.log("eee", e.id);  setModalDisplay("") } } >Submit</button> 
                        </div>
                     </div>
              </StyledTableCell>
              <StyledTableCell align="right" onClick={()=>handleDelete(e.id)} style={{cursor : "pointer"}} >Delete</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           <br />
           <br />
    </div>
  )
}
