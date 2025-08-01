'use client'
import Services from "../components/Home/services"
import Gallery from "../components/Home/gallery"
import Explore from "../components/Home/explore"
import ScheduleATour from "../components/Home/schedule-a-tour"
import Loader from "@/components/loader/loader"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Property from "@/components/Home/property"
import MainSection from '@/components/Home/MainHomeSection';


export default function Home() {
  
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);
  return (
    <>
      {
      loading ? <Loader/> : 
      <div>
        {/*Main section  */}
        <MainSection/>
        {/* Property Section */}
        <Property/>
        {/* Our Property Services */}
        <Services/>
        {/*Explore section  */}
        <Explore/>
        {/* Gallery section */}
        <Gallery/>
        {/* Schedule A Tour */}
        <ScheduleATour/>
        {/* Footer */}
      </div>
    } 

    </>
  )
}
