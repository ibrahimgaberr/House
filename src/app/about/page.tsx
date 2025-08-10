"use client";
import MainAboutSection from "@/components/About/MainAboutSection";
import ScrollToTop from "@/components/scrolltotop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        {/* Main About Section */}
        <MainAboutSection />
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </>
  );
}
