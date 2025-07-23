'use client'
import MainContact from '@/components/Contact/mainContact';
import Loader from '@/components/loader/loader';
import ScrollToTop from '@/components/scrolltotop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';


export default function ContactUs() {
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
            <MainContact/>
            {/* Scroll to top button */}
            <ScrollToTop />
        </div>
        }
  </>

)
}