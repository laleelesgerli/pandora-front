import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AboutPandora from '../Pages/AboutPandora/AboutPandora'
import TermsAndConditions from '../Pages/TermsAndConditions/TermsAndConditions'
import CookiePolicy from '../Pages/CookiePolicy/CookiePolicy'
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy'
import AllServices from '../Pages/AllServices/AllServices'
import Register from '../Pages/Register/Register'
import Profile from '../Pages/Profile/Profile'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Login from '../Pages/Login/Login'
import Basket from '../Pages/Basket/Basket'
import Wishlist from '../Pages/Wishlist/Wishlist'
import DetailPage from '../Pages/DetailPage/DetailPage'
import Charms from '../Pages/Charms/Charms'
import Bracelets from '../Pages/Bracelets/Bracelets'
import Rings from '../Pages/Rings/Rings'
import Earrings from '../Pages/Earrings/Earrings'
import Necklaces from '../Pages/Necklaces/Necklaces'
import AddToDo from '../Pages/AddToDo/AddToDo'
import Payment from '../Pages/Payment/Payment'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutPandora' element={<AboutPandora />} />
        <Route path='/terms' element={<TermsAndConditions
        />} />
        <Route path='/cookie' element={<CookiePolicy
        />} />
        <Route path='/privacy' element={<PrivacyPolicy
        />} />
        <Route path='/services' element={<AllServices
        />} />
        <Route path='/register' element={<Register
        />} />
        <Route path='/profile' element={<Profile
        />} />
        <Route path='/dashboard' element={<Dashboard
        />} />
        <Route path='/login' element={<Login
        />} />
        <Route path='/basket' element={<Basket
          />} />
        <Route path='/wishlist' element={<Wishlist
        />} />
        <Route path='/bracelets' element={<Bracelets
        />} />
        <Route path='/rings' element={<Rings
        />} />
        <Route path='/necklaces' element={<Necklaces
        />} />
        <Route path='/earrings' element={<Earrings
        />} />
        <Route path="/add-new-todo" element={<AddToDo />} />
        <Route path="/product/:note_id" element={<DetailPage/>} />
        <Route path="/charms" element={<Charms/>} />
        <Route path="/basket/payment" element={<Payment/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router