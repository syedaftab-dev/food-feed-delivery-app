import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import UserRegister from "../pages/auth/UserRegister"
import UserLogin from '../pages/auth/UserLogin'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import Home from "../pages/general/Home"
import CreateFood from '../pages/food-partner/CreateFoodPartner'
import Profile from '../pages/food-partner/Profile'
const AppRoutes = () => {
  return (
    <div>
         <Router>
            <Routes>
                <Route path="/user/register" element={<UserRegister/>}/>
                <Route path="/user/login" element={<UserLogin/>}/>
                <Route path="/food-partner/register" element={<FoodPartnerRegister/>}/>
                <Route path="/food-partner/login" element={<FoodPartnerLogin/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/create-food" element={<CreateFood/>}/>
                <Route path="/food-partner/:profile" element={<Profile/>}/>
            </Routes>
         </Router>
    </div>
  )
}

export default AppRoutes
