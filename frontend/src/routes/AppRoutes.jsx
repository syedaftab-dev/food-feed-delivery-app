import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
         <Router>
            <Routes>
                <Route path="/user/register" element={<h1>User Register Form</h1>}/>
                <Route path="/user/login" element={<h1>User Login Form</h1>}/>
                <Route path="/food-partner/register" element={<h1>Food partner Register Form</h1>}/>
                <Route path="/food-partner/login" element={<h1>Food partner login</h1>}/>
            </Routes>
         </Router>
    </div>
  )
}

export default AppRoutes
