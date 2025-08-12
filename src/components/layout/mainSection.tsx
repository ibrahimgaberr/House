import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MainSection({ name, showDetails }: { name?: string; showDetails?: string }) {
    return (
    <>
        {/* main heading banner */}
        <div className="about-us relative overflow-hidden bg-[url('/about/about-cover.png')] h-[55vh] bg-cover bg-center
        after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50">
            <div className="hidden xl:block absolute top-0 right-0 bg-[url('/about/hero-img2.png')] h-[100%] z-1 w-[50%]
            bg-no-repeat bg-[position:60%_30%] after:content-[''] after:absolute after:w-[10px] after:h-[100vh] after:bg-white
            after:rotate-30 after:top-[-133px] after:bottom-0 after:left-[50%]"></div>
        <div className="relative flex justify-start items-center ml-5 lg:ml-32 w-full h-full z-2">
            <div className="pt-15">
            <h1 className="text-white  text-2xl md:text-6xl font-bold ">{ name }</h1>
            <p className="flex items-center gap-3 text-sm text-white font-bold">
                <Link href="/">Home</Link> <ChevronRight size={20} strokeWidth={2} /> <Link href={`/${name?.toLowerCase()}`}>{name}</Link>
                {showDetails && <span className="flex items-center"><ChevronRight size={20} strokeWidth={2} />
                {showDetails}</span>}
            </p>
            </div>
        </div>
        </div>
    </>
);
}