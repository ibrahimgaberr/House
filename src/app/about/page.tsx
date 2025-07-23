'use client'
import MainAboutSection from '@/components/About/MainAboutSection';
import Loader from '@/components/loader/loader';
import ScrollToTop from '@/components/scrolltotop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function AboutUs() {
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
            {/* Main About Section */}
            <MainAboutSection/>
            {/* Scroll to top button */}
            <ScrollToTop />
        </div>
        }
  </>

)
}