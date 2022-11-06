import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  "../styles/AdminPage.css"
import { getAdminData } from '../redux/admin/action'
import { deleteAdminData } from '../redux/admin/action'
import { postAdminData } from '../redux/admin/action'
import { editAdminData } from '../redux/admin/action'

export const AdminPage = () => {
       const dispatch = useDispatch();
       const adminData = useSelector((state)=>state.AdminReducer.admindata);
        
       const [category, setCategory] = useState("");
       const [img_url, setImg_url] = useState("");
       const [room_type, setRoom_type] = useState("");
       const [bed_type, setBed_type] = useState("");
       const [adult, setAdult] = useState("");
       const [capacity, setCapacity]  = useState("");
       const [ cost, setCost] = useState("");       

       const [modalDisplay , setModalDisplay] = useState("");
       const [editRoom, setEditRoom] = useState("");
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
                console.log(category, img_url, room_type, bed_type, adult,capacity,cost);
                 const payload ={
                  "category":  category,
                  "image_url": img_url,
                  "type_of_room": room_type ,
                  "bed_type": bed_type,
                  "no_of_persons": Number(adult),
                  "capacity": Number(capacity),
                  "cost":  Number(cost),
                  "booked":false
                 }
                 dispatch(postAdminData(payload)).then(()=>{
                    dispatch( getAdminData());
                 })  
         }

         const editHandler = (Id) =>{
             const payload = {
              "type_of_room": editRoom ,   
             }
               console.log("iddd",Id);
              dispatch(editAdminData(Id,payload)).then(()=>{
                    dispatch(getAdminData());
              })

         };
        
       console.log("daatat", adminData);
     
  return (
    <div>
        <h1>Admin page </h1>
        <div>
               <h2>Add room details</h2>
            <select onChange={(e)=>setCategory(e.target.value)} name="" id="">
              <option value="">Slect Room category</option>
              <option value="family">Family</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
            </select><br /> <br/>
            <input onChange={(e)=>setImg_url(e.target.value)} type="text" placeholder='Enater image url' /><br />
             <form onChange={(e)=>setRoom_type(e.target.value)} action="">
               <label htmlFor="">   Select Room Type </label><br />
                <input type="radio" name='type_of_room' value="AC" />
                <label htmlFor="type_of_room">AC</label>
                <input type="radio"  name='type_of_room' value= "non AC"/>
                <label htmlFor="type_of_room">non AC</label>
             </form>
              <select onChange={(e)=>setBed_type(e.target.value)} name="" id="">
                 <option value="">select Bed type</option>
                 <option value="single">Single</option>
                 <option value="double">Double</option>
              </select> <br />
              <input onChange={(e)=>setAdult(e.target.value)} type="number"  placeholder='No of Adult'/> <br />
              <input onChange={(e)=>setCapacity(e.target.value)} type="number" placeholder='enter max capacity' /><br />
              <input onChange={(e)=>setCost(e.target.value)} type="number"  placeholder='cost per night'/><br />
                <button onClick={()=>addAdminData()} >Add Room</button> <br /> <br />
              
        </div>
          <table>
            <thead>
            <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Type of Room</th>
            <th>Bed Type</th>
            <th>No of Person</th>
            <th>Capacity</th>
            <th>Cost</th>
            <th>Status</th>
            <th >Edit</th>
            <th>Delete</th>
            </tr>
            </thead> 
             <tbody>
              {
                adminData.length >0 && adminData.map((e)=>(
                  <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.category}</td>
                  <td>{e.type_of_room}</td>
                  <td>{e.bed_type}</td>
                  <td>{e.no_of_persons}</td>
                  <td>{e.capacity}</td>
                  <td>{e.cost}</td>
                  <td>{`${e.booked ? "Booked": "Not Booked" }`}</td>
                  <td > <div onClick={()=>{setModalDisplay("block"); setEditID(e.id)}}  style={{cursor : "pointer"}} > Edit </div> 
                    
                   <div  style={{display : `${modalDisplay ? "block": ""}`}}  id="myModal" className="modal">
                     {/* <!-- Modal content --> */}
                      <div className="modal-content">
                        <span onClick={()=>setModalDisplay("")}   className="close">&times;</span>
                        <p>Edit Admin Data</p>
                          <select onChange={(e)=>setEditRoom(e.target.value)}  name="" id="">
                            <option value="">Change Room Type</option>
                            <option value="AC"> AC</option>
                            <option value="non AC">non AC</option>
                          </select> <br /> <br />
                           <button onClick={()=>{ editHandler(editID); console.log("eee", e.id);  setModalDisplay("") } } >Submit</button> 
                       </div>
                    </div>
                    
                    </td>
                  <td onClick={()=>handleDelete(e.id)} style={{cursor : "pointer"}}>Delete</td>
                  </tr>
                ))
              }
             </tbody>
          </table> 
           
    </div>
  )
}
