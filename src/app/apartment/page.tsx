import MainApartment from "@/components/apartment/mainApartment";
import ScrollToTop from "@/components/scrolltotop";

export default function Apartment() {

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