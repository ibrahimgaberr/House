"use client";
import Image from "next/image";
import Link from "next/link";
import { Search, MailPlus, Menu, CircleX } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);

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
      window.innerWidth <= 1023 ? setCollapse(true) : setCollapse(false);

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-between bg-white p-3 rounded-4xl fixed z-5 transition-all duration-300 ${
          isScrolled ? "navbar-expand top-0 rounded-none" : "navbar top-5"
        }`}
      >
        <div className="ml-5">
          <Image width={150} height={50} src="/nav-logo.png" alt="Logo" />
        </div>

        {collapse ? (
          <div className="mr-3 cursor-pointer">
            <Menu onClick={() => openNavbarMenu()} size={28} />
          </div>
        ) : (
          <>
            <div className="font-bold text-xl">
              <ul className="flex justify-around items-center">
                <li className="mr-5">
                  <Link href="#property">Property</Link>
                </li>
                <li className="mr-5">
                  <Link href="#amenities">Amenities</Link>
                </li>
                <li className="mr-5"    >
                  <Link href="#explore">Explore</Link>
                </li>
                <li>
                  <Link href="#gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="flex">
              <div className="search mr-5 flex items-center">
                <Search /> <div className="dash"></div>
              </div>
              <div className="mr-5">
                <ul className="flex items-center">
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
                  {/* <li><Image width={30} height={20} src="/youtube-icon.svg" alt="youtube" /></li> */}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        className={`slide-menu ${
          openCollapse ? "open" : ""
        } fixed top-0 left-0 right-0 bottom-0 h-[100vh] bg-white p-4 z-6`}
      >
        <div className="ml-5">
          <Image width={150} height={50} src="/nav-logo.png" alt="Logo" />
        </div>
        <div className="font-bold text-xl items-center">
          <ul className="flex flex-col justify-around items-center gap-2">
            <li
              onClick={() => {
                setOpenCollapse(false);
              }}
            >
              <Link href="#property">Property</Link>
            </li>
            <li
              onClick={() => {
                setOpenCollapse(false);
              }}
            >
              <Link href="#amenities">Amenities</Link>
            </li>
            <li
              onClick={() => {
                setOpenCollapse(false);
              }}
            >
              <Link href="#gallery">Gallery</Link>
            </li>
            <li
              onClick={() => {
                setOpenCollapse(false);
              }}
            >
              <Link href="#schedule">Schedule A Tour</Link>
            </li>
            <li
              onClick={() => {
                setOpenCollapse(false);
              }}
            >
              <Link href="#explore">Explore</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="search mt-3">
            <Search />
          </div>
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
      </div>
    </>
  );
}
