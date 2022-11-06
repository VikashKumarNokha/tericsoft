import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { Home } from './Home'

import { AdminLogin } from './AdminLogin'
import { AdminPage } from './AdminPage'



export const MainRoute = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element = {<Home/>}/>
    
 
     <Route path="/adminpage" element={<AdminPage />} />
  

     <Route path="/adminlogin" element={<AdminLogin />} />
     <Route path="*" element={<h3>Page Not Found</h3>} />
  </Routes>
    </div>
  )
}
