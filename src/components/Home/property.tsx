import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Property() {
  return (
    <>
    <section id="property">
      <div className="property py-15">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div data-aos="fade-right" className="w-1/2 relative lg:h-[500px]">
              <div className="img1 mb-4">
                <Image width={400} height={440} src="/house1.png" alt="House" />
              </div>
              <div className="sm:hidden xl:block img2 absolute bottom-10 right-20">
                <Image width={400} height={440} src="/house2.png" alt="House" />
              </div>
            </div>
            <div data-aos="fade-left" className="text-center lg:text-left w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-[500px]">
              <p className="bg-gray-200/60 text-[#14453D] uppercase text-center text-base inline-block p-2 rounded-3xl w-fit">Property Overview</p>
              <p className="text-4xl font-extrabold py-4 leading-12">Elegance Every Detail <br/>Welcome Suite Villa</p>
              <p className="mb-3 text-gray-700">Experience the pinnacle of luxury living at our exclusive property, where every detail has been meticulously crafted to provide an unparalleled retreat. Nestled in the heart of, this haven offers.</p>
              <div className="to-animate">
                <p className="text-gray-700 mb-2">Discover the essence of luxury our exclusive property in Dallas, where timeless elegance and modern best comfort converge.</p>
              <Button className="relative z-1 rounded-4xl bg-[#14453D] leading-3.5 text-white text-lg border-0 py-6 my-2 cursor-pointer hover:text-white
              after:content-[''] after:absolute after:h-10 after:w-10 after:inline-block after:rounded-full after:transition-all 
              after:duration-400 after:bg-[#446A64] after:left-[5px] after:top-[4px] after:-z-10 
              hover:after:w-[94%] hover:after:rounded-[80px]
              ">
                <Link href={'#home'}>View Our Property</Link>
              </Button>
              {/* <Button className="relative z-1 rounded-4xl text-black bg-amber-200 border-0 py-6 my-2 cursor-pointer
               hover:text-white after:content-[''] after:absolute after:h-10 after:w-10 after:inline-block after:rounded-full 
               after:transition-all after:duration-400 after:bg-[#446A64] after:left-[5px] after:top-[4px]
                after:-z-10 hover:after:w-[94%] hover:after:rounded-[80px]" variant="outline">
                <Link href={'#home'}>View Our Property</Link>
              </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
