
'use client'

import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';
import CustomNavbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Partners from './components/Partners';
import Service from './components/Service';
import Services from './components/Services';
import SingleCard from './components/SingleCard';
import TopNavbar from './components/TopNavbar';

export default function Home() {
  return (
    <div>
    <TopNavbar />
    <CustomNavbar/>
    <Hero/>
    <Services/>
    <SingleCard/>
    <AboutUs/>
    <Service/>
    
    
    <Partners/>
    <ContactUs/>
    <Newsletter/>
    </div>
  );
}
