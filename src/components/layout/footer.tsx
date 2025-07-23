import Image from "next/image";
import Link from "next/link";
import {  MailPlus, MapPin, Phone } from "lucide-react";
// import { useState, useEffect } from "react";

export default function Footer() {
    return (
        <>
            <footer className="p-8 bg-black w-[100%] text-white ">
                <div className="container flex flex-col lg:flex-row justify-between items-center relative after:content-[''] after:block after:w-[80%] 
                after:h-[1px] after:bg-gray-300 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-20px]">
                <div className="img mb-5 lg:mb-0">
                    <Image width={150} height={50} src="/nav-logo.png" alt="Logo" />
                </div>
          <div className="list mb-5">
          <h1 className="font-bold text-[20px] text-center lg:text-left mb-2">Links:</h1>
          <div className="flex gap-20">
              <ul className="flex flex-col items-center text-lg font-bold">
                <li className="mb-3 hover:text-[#DEC678]">
                  <Link href="#property">Property</Link>
                </li>
                <li className="mb-3 hover:text-[#DEC678]">
                  <Link href="#amenities">Amenities</Link>
                </li>
                <li className="mb-3 hover:text-[#DEC678]">
                  <Link href="#explore">Explore</Link>
                </li>
                <li className="mb-3 hover:text-[#DEC678]">
                  <Link href="#gallery">Gallery</Link>
                </li>
              </ul>
              <ul className="flex flex-col items-center text-lg font-bold">
                <li className="mb-3 hover:text-[#DEC678]">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="mb-3 hover:text-[#DEC678]">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="mb-3 hover:text-[#DEC678]">
                  <Link href="/apartment">Apartment</Link>
                </li>
              </ul>
          </div>
                </div>
                <div className="contact flex flex-col items-center text-lg font-bold mb-5 lg:mb-0">
                    <p className="flex mb-5"><span className="mr-2"><MapPin /></span>65, Brand Tower, New York, USA </p>
                    <p className="flex"><span className="mr-2"><Phone /></span>123-456-7890</p>
                <ul className="flex items-center mt-5">
                  <li className="mr-4 w-[50px] h-[50px] rounded-full cursor-pointer bg-gray-300 flex justify-center items-center 
                  hover:bg-[#DEC678] transition-all duration-300">
                    <Image
                      width={20}
                      height={20}
                      src="/facebook-icon.svg"
                      alt="facebbok"
                    />
                  </li>
                  <li className="mr-4 w-[50px] h-[50px] rounded-full cursor-pointer bg-gray-300 flex justify-center items-center 
                  hover:bg-[#DEC678] transition-all duration-300">
                    <MailPlus className="text-black" />
                  </li>
                  <li className="mr-4 w-[50px] h-[50px] rounded-full cursor-pointer bg-gray-300 flex justify-center items-center 
                  hover:bg-[#DEC678] transition-all duration-300">
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
                <div className="copyright text-center mt-10 text-base text-white">
                    <p>© 2024 Hosue -Single Property HTML Template.</p>
                </div>
            </footer>
        </>
    )
}