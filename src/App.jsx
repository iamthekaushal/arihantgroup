import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutUs from './pages/AboutUs';
import ServicesUpdated from './components/serviceupdated';
import WhyUs from './components/WhyUs';
import TechStack from './components/TechStack';
import ProcessRoadmap from './components/ProcessRoadmap';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import BlockchainDevelopment from './pages/BlockchainDevelopment';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import AllTechServices from './pages/AllTechServices';
import Industry from './pages/Industry';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';


function App() {
  return (
    <>
      <Header /> 


      <Routes>
        <Route path="/" element={<div>
          <Hero />
          <ServicesUpdated />
          <WhyUs />
          <TechStack />
          <ProcessRoadmap />
          <SocialProof />
          <FinalCTA />
          </div>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/blockchain-solutions" element={<BlockchainDevelopment />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services" element={<AllTechServices />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />




        </Routes>

        <Footer />
    </>
  );
}

export default App;