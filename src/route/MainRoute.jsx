import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/AboutUs'
import OurTeam from '../pages/OurTeam';
import ContactUs from '../pages/ContactUs';
import Footer from '../components/Footer';



const MainRoute = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/OurTeam' element={<OurTeam/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default MainRoute