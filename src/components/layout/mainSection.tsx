import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MainSection({ name }: { name?: string }) {
    return (
    <>
        {/* main heading */}
        <div className="about-us relative overflow-hidden bg-[url('/about/about-cover.png')] h-[70vh] bg-cover bg-center after:absolute 
        after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50">
            <div className="hidden xl:block absolute top-0 right-0 bg-[url('/about/hero-img2.png')] h-[100%] z-1 w-[50%]
            bg-no-repeat bg-[position:60%_30%] after:content-[''] after:absolute after:w-[10px] after:h-[100vh] after:bg-white
            after:rotate-30 after:top-[-133px] after:bottom-0 after:left-[50%]"></div>
        <div className="relative inset-0 flex flex-col lg:flex-row justify-center lg:justify-around gap-16 lg:gap-0 items-center w-full h-full z-2">
            <div className="pt-15">
            <h1 className="text-white  text-2xl md:text-6xl font-bold ">{ name }</h1>
            <p className="flex items-center gap-3 mt-10 text-xl md:text-3xl text-white font-bold">
                <Link href="/">Home</Link> <ChevronRight size={28} strokeWidth={2.25} /> <Link href={`/${name?.toLowerCase()}`}>{name}</Link>
                </p>
            </div>
            <div className="p-4 flex items-center bg-white rounded-full shadow-lg">
                <Image 
                    width={60} 
                    height={60} 
                    className="rounded-full mr-4" 
                    src="/about/others-img1.png" 
                    alt="Villa"
                />
            <div>
                <h2 className="font-semibold text-lg lg:text-2xl">Luxury Suite Villa</h2>
                <p className="font-semibold text-lg lg:text-2xl">$1,800,000</p>
            </div>
        </div>
        </div>
        </div>
    </>
);
}