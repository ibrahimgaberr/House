"use client";
import MainNews from "@/components/news/mainNews";
import ScrollToTop from "@/components/scrolltotop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function News() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        {/* Main About Section */}
        <MainNews />
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </>
  );
}
