import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AdminLogin = () => {
         const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const handleSubmit = ()=>{
              if(email == "admin@gmail.com" && password == "masai"){
                  alert("Login successfull");
                  navigate("/adminpage");
              }else{
                 alert("Please check your login credential");
              }   
        }
            

  return (
    <div>
         <h1>Admin Login</h1>
           <input type=" text" onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Email........'/> <br /><br />
           <input type="text" onChange={(e)=>setPassword(e.currentTarget.value)} placeholder='Enter Password.....' /> <br /> <br />

           <button onClick={()=>handleSubmit()}>Login</button>
    </div>
  )
}
