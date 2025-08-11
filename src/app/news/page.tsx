"use client";
import AosInitializer from "@/components/Home/AOSInitializer";
import MainNews from "@/components/news/mainNews";
import ScrollToTop from "@/components/scrolltotop";

export default function News() {

  return (
    <>
      <AosInitializer />
      <div>
        {/* Main About Section */}
        <MainNews />
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </>
  );
}
