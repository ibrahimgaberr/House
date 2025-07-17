'use client'
import Amenities from "../components/Home/amenities"
import Gallery from "../components/Home/gallery"
import Explore from "../components/Home/explore"
import Navbar from "../components/Home/navbar"
import ScheduleATour from "../components/Home/schedule-a-tour"
import Loader from "@/components/loader/loader"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Property from "@/components/Home/property"
import MainSection from "../components/Home/MainSection"

export default function Home() {
  
  const [loading, isLoading] = useState(true);

      const timer = setTimeout(() => {
      isLoading(false);
    }, 1000); 

  useEffect(() => {
    AOS.init();

    return () => clearTimeout(timer); 
  }, [timer]);
  return (
    <>
      {
      loading ? <Loader/> : 
      <div>
        <Navbar/>
        {/*Main section  */}
        <MainSection/>
        {/* Property Section */}
        <Property/>
        {/* Our Property Amenities */}
        <Amenities/>
        {/*Explore section  */}
        <Explore/>
        {/* Gallery section */}
        <Gallery/>
        {/* Schedule A Tour */}
        <ScheduleATour/>
      </div>
    } 

    </>
  )
}
