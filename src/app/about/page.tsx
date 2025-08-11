"use client";
import MainAboutSection from "@/components/About/MainAboutSection";
import AosInitializer from "@/components/Home/AOSInitializer";
import ScrollToTop from "@/components/scrolltotop";

export default function AboutUs() {

  return (
    <>
      <div>
        <AosInitializer />
        {/* Main About Section */}
        <MainAboutSection />
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </>
  );
}
