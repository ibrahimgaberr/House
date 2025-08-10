"use client";
import MainContact from "@/components/Contact/mainContact";
import ScrollToTop from "@/components/scrolltotop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        {/* Main About Section */}
        <MainContact />
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </>
  );
}
