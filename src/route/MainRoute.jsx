import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import News from '../components/News';
import About from '../components/About'
import Market from '../pages/Market';

const MainRoute = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/News&insight' element={<News/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Market' element={<Market/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default MainRoute