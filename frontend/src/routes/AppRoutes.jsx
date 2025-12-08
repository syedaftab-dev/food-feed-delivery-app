import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import UserRegister from "../pages/auth/UserRegister"
import UserLogin from '../pages/auth/UserLogin'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'

const AppRoutes = () => {
  return (
    <div>
         <Router>
            <Routes>
                <Route path="/user/register" element={<UserRegister/>}/>
                <Route path="/user/login" element={<UserLogin/>}/>
                <Route path="/food-partner/register" element={<FoodPartnerRegister/>}/>
                <Route path="/food-partner/login" element={<FoodPartnerLogin/>}/>
            </Routes>
         </Router>
    </div>
  )
}

export default AppRoutes
