"use client";
import MainApartment from "@/components/apartment/mainApartment";
import ScrollToTop from "@/components/scrolltotop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Apartment() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        {/* Main About Section */}
        <MainApartment />
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </>
  );
}
