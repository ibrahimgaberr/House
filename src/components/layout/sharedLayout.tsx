import ScrollToTop from "../scrolltotop";
import Footer from "./footer";
import Navbar from "./navbar";

export default function SharedLayout({children}: {children: React.ReactNode}) {
    return (<>
        <Navbar/>
        {children}
        {/* Scroll to top button */}
        <ScrollToTop />
        <Footer/>
    </>)
}