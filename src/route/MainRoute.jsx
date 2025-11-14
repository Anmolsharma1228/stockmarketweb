import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/AboutUs'
import OurTeam from '../pages/OurTeam';
import Help from '../pages/Help';
import Footer from '../components/Footer';

//Service Pages Imports
import AllRoc from '../pages/Services/AllRoc';
import DigitalSig from '../pages/Services/DigitalSig';
import MSME from '../pages/Services/MSME';
import ITRS from '../pages/Services/ITRS';
import GSTreg from '../pages/Services/GSTreg';
import ESICreg from '../pages/Services/ESICreg';
import StartUpReg from '../pages/Services/StartUpReg';
import TDS from '../pages/Services/TDS';

//Subpages Imports
import PropriRegs from '../pages/Subpages/StartUpRegistartion/PropriRegs';
import PartnershipFirmReg from '../pages/Subpages/StartUpRegistartion/PartnershipFirmReg';
import LLPRegistration from '../pages/Subpages/StartUpRegistartion/LLPregistartion';
import PrivateLtdComReg from '../pages/Subpages/StartUpRegistartion/PrivateLtdComReg';
import PublicLtdComReg from '../pages/Subpages/StartUpRegistartion/PublicLtdComReg';
import OnePersonReg from '../pages/Subpages/StartUpRegistartion/OnePersonReg';
import NgoTrust from '../pages/Subpages/StartUpRegistartion/NgoTrust';
import HUF from '../pages/Subpages/StartUpRegistartion/HUF';

const MainRoute = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/OurTeam' element={<OurTeam/>}></Route>
      <Route path='/Help' element={<Help/>}></Route>
      <Route path='/Services/AllRoc' element={<AllRoc/>}></Route>
      <Route path='/Services/DigitalSig' element={<DigitalSig/>}></Route>
      <Route path='/Services/MSME' element={<MSME/>}></Route>
      <Route path='/Services/ITRS' element={<ITRS/>}></Route>
      <Route path='/Services/GSTreg' element={<GSTreg/>}></Route>
      <Route path='/Services/ESICreg' element={<ESICreg/>}></Route>
      <Route path='/Services/StartUpReg' element={<StartUpReg/>}></Route>
      <Route path='/Services/TDS' element={<TDS/>}></Route>
      <Route path='/Services/StartUpReg/Proprietorship' element={<PropriRegs/>}></Route>
      <Route path='/Services/StartUpReg/PartnershipFirm' element={<PartnershipFirmReg/>}></Route>
      <Route path='/Services/StartUpReg/LLPRegistration' element={<LLPRegistration/>}></Route>
      <Route path='/Services/StartUpReg/PrivateLtdCompany' element={<PrivateLtdComReg/>}></Route>
      <Route path='/Services/StartUpReg/PublicLtdCompany' element={<PublicLtdComReg/>}></Route>
      <Route path='/Services/StartUpReg/OnePersonCompany' element={<OnePersonReg/>}></Route>
      <Route path='/Services/StartUpReg/NgoTrust' element={<NgoTrust/>}></Route>
      <Route path='/Services/StartUpReg/HUF' element={<HUF/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default MainRoute