import MainContact from "@/components/Contact/mainContact";
import AosInitializer from "@/components/Home/AOSInitializer";
import ScrollToTop from "@/components/scrolltotop";

export default function ContactUs() {

  return (
    <>
      <AosInitializer />
      <div>
        {/* Main About Section */}
        <MainContact />
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </>
  );
}
