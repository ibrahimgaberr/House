import Image from "next/image";
import OurButton from "../layout/button";

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
              <p className="bg-gray-200/60 text-[#14453D] uppercase text-center text-md lg:text-base inline-block p-2 rounded-3xl w-fit">Property Overview</p>
              <p className="text-md md:text-4xl font-extrabold py-4 leading-6 md:leading-12">Elegance Every Detail <br/>Welcome Suite Villa</p>
              <p className="mb-3 text-gray-700">Experience the pinnacle of luxury living at our exclusive property, where every detail has been meticulously crafted to provide an unparalleled retreat. Nestled in the heart of, this haven offers.</p>
              <div className="to-animate">
              <p className="text-gray-700 mb-2">Discover the essence of luxury our exclusive property in Dallas, where timeless elegance and modern best comfort converge.</p>
            <OurButton name="View Our Property" pathLink="#"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
