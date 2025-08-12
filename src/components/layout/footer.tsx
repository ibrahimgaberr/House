import Image from "next/image";
import Link from "next/link";
import { MailPlus, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="p-10 bg-gradient-to-b from-[#0e2e28] via-[#14453D] to-[#0e2e28] text-white relative">
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#14453D] via-[#14453D] to-[#14453D]" />

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
        {/* Logo */}
        <div className="img">
          <Link href="/">
            <p className="font-serif italic font-bold text-3xl tracking-wider text-white hover:text-gray-200 transition-colors duration-300">
              ,elsewhere
            </p>
          </Link>
        </div>

        {/* Links */}
        <div className="list">
          <h1 className="font-semibold text-lg text-white mb-4 text-center lg:text-left uppercase tracking-wide">
            Explore :
          </h1>
          <div className="flex gap-16">
            <ul className="flex flex-col items-center lg:items-start text-base space-y-2">
              <li className="hover:text-gray-200 transition-colors">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-gray-200 transition-colors">
                <Link href="/apartment">Apartment</Link>
              </li>
              <li className="hover:text-gray-200 transition-colors">
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
            <ul className="flex flex-col items-center lg:items-start text-base space-y-2">
              <li className="hover:text-gray-200 transition-colors">
                <Link href="/news">News</Link>
              </li>
              <li className="hover:text-gray-200 transition-colors">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="contact flex flex-col items-center lg:items-start text-base space-y-3">
          <p className="flex items-center">
            <MapPin className="mr-2 text-white" />
            65, Brand Tower, New York, USA
          </p>
          <p className="flex items-center">
            <Phone className="mr-2 text-white" />
            123-456-7890
          </p>

          {/* Social Icons */}
          <ul className="flex items-center gap-4 mt-3">
            <li
              className="w-12 h-12 rounded-full bg-[#1f5b4e] flex justify-center items-center cursor-pointer 
              bg-white hover:scale-110 transition-all duration-300"
            >
              <Image
                width={20}
                height={20}
                src="/facebook-icon.svg"
                alt="Facebook"
              />
            </li>
            <li
              className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer 
              bg-white hover:scale-110 transition-all duration-300"
            >
              <MailPlus className="text-black font-bold not-even:hover:text-[#14453D]" />
            </li>
            <li
              className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer 
             bg-white hover:scale-110 transition-all duration-300"
            >
              <Image
                width={20}
                height={20}
                src="/linkedin-icon.svg"
                alt="LinkedIn"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Above Copyright */}
      <div className="mt-10 border-t border- border-[#14453D]"></div>

      {/* Copyright */}
      <div className="text-center mt-4 text-sm text-gray-200 tracking-wide">
        <p>© 2025 Elsewhere — Crafted with Elegance.</p>
      </div>
    </footer>
  );
}
