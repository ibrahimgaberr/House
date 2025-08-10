"use client";
import Image from "next/image";
import Link from "next/link";
import { MailPlus, Menu, CircleX } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);

   const bookNowBtn = () => {
    if(pathname === "/")
    {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }else {
      router.push("/");
    }
  }

  function openNavbarMenu() {
    if (openCollapse) {
      setOpenCollapse(false);
    } else {
      setOpenCollapse(true);
    }
  }

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
    const handleResize = () =>
      window.innerWidth <= 1060 ? setCollapse(true) : setCollapse(false);

    handleResize();
    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);    
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-between bg-white p-3 rounded-[3rem] fixed z-5 transition-all duration-300 ${
          isScrolled ? "w-full left-1/2 -translate-x-1/2 top-0 rounded-none" : "w-[80%] left-1/2 -translate-x-1/2 top-5"
        }`}
      >
        <div className="ml-5">
          <Link href="/"> 
              {/* <Image width={150} height={50} src="/nav-logo.png" alt="Logo" /> */}
              <p className="font-bold text-xl text-[#14453D]">,elsewhere</p>
          </Link>
        </div>

        {collapse ? (
          <div className="mr-3 cursor-pointer">
            <Menu onClick={() => openNavbarMenu()} size={28} />
          </div>
        ) : (
          <>
            <div className="font-bold text-xl">
              <ul className="flex justify-around items-center">
                <li className={`mr-5 ${pathname === "/about" ? "text-[#14453D]" : ""}`} 
                >
                  <Link href="/about">About Us</Link>
                </li>
                <li className={`mr-5 ${pathname === "/apartment" ? "text-[#14453D]" : ""}`} 
                >
                  <Link href="/apartment">Apartment</Link>
                </li>
                <li className={`mr-5 ${pathname === "/news" ? "text-[#14453D]" : ""}`} 
                >
                  <Link href="/news">News</Link>
                </li>
                <li className={`mr-5 ${pathname === "/careers" ? "text-[#14453D]" : ""}`} 
                >
                  <Link href="/careers">Careers</Link>
                </li>
                <li className={`mr-5 ${pathname === "/contact" ? "text-[#14453D]" : ""}`} 
                >
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <button
              onClick={bookNowBtn}
              className="p-[10px] font-bold text-md group rounded-4xl text-white bg-[#14453D] border-0 cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </>
        )}
      </div>
      <div
        className={`-translate-x-full transition-transform duration-300 ease-in-out ${
          openCollapse ? "translate-x-0" : ""
        } fixed top-0 left-0 right-0 bottom-0 h-[100vh] bg-white p-4 z-16`}
      >
        <div className="flex justify-between ml-5">
          <Link href="/">
              <Image width={150} height={50} src="/nav-logo.png" alt="Logo" />
          </Link>
          <div className="ml-auto pr-4 cursor-pointer">
            <CircleX
              size={32}
              strokeWidth={2}
              onClick={() => {
                setOpenCollapse(false);
              }}
            />
          </div>
        </div>
        <div className="font-bold text-xl items-center">
          <ul className="flex flex-col justify-around items-center gap-2">
            <li
              onClick={() => {
                setOpenCollapse(false);
              }}
            >
              <Link href="/about">About Us</Link>
            </li>
              <li 
              onClick={() => {
              setOpenCollapse(false);
                }} 
              >
                <Link href="/apartment">Apartment</Link>
              </li>
              <li 
              onClick={() => {
              setOpenCollapse(false);
                }} 
              >
                <Link href="/news">News</Link>
              </li>
              <li 
              onClick={() => {
              setOpenCollapse(false);
                }} 
              >
                <Link href="/careers">Careers</Link>
              </li>
              <li
                onClick={() => {
                  setOpenCollapse(false);
                }}
              >
                <Link href="/contact">Contact Us</Link>
              </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="text-2xl font-bold py-4">Social Links:</p>
            <ul className="flex flex-row p-3 items-center">
              <li className="mr-3">
                <Image
                  width={20}
                  height={20}
                  src="/facebook-icon.svg"
                  alt="facebbok"
                />
              </li>
              <li className="mr-3">
                <MailPlus />
              </li>
              <li className="mr-3">
                <Image
                  width={20}
                  height={20}
                  src="/linkedin-icon.svg"
                  alt="linkedin"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
