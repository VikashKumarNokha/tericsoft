import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import SingleRoom from '../component/SingleRoom'
//import Rooms from './Rooms'
import { Home } from './Home'
// import { UsersRegister } from './UsersRegister'
// import { UsersLogin } from './UsersLogin'
import { AdminLogin } from './AdminLogin'
//import { AdminPage } from './AdminPage'



export const MainRoute = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element = {<Home/>}/>
     {/* <Route path="/rooms" element={<Rooms />} />
     <Route path="/rooms/:id" element={ <SingleRoom /> } /> */}
 
     {/* <Route path="/adminpage" element={<AdminPage />} /> */}
  
     {/* <Route path="/usersregister" element={<UsersRegister />} />
     <Route path="/userslogin" element={<UsersLogin />} /> */}
     <Route path="/adminlogin" element={<AdminLogin />} />
     <Route path="*" element={<h3>Page Not Found</h3>} />
  </Routes>
    </div>
  )
}
