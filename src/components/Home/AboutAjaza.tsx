import Image from "next/image";
import OurButton from "../layout/button";

export default function AboutAjaza() {
  return (
    <>
    <section id="about-ajaza">
      <div className="about-ajaza py-15">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div data-aos="fade-right" className="w-full lg:w-1/2 relative lg:h-[500px]">
              <div className="mb-4 flex justify-center lg:justify-start">
                <Image width={400} height={440} src="/house1.png" alt="House" />
              </div>
              <div className="hidden xl:block absolute -top-10 left-30">
                <Image width={400} height={440} src="/house2.png" alt="House" />
              </div>
            </div>
            <div data-aos="fade-left" className="text-center lg:text-left w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-[500px]">
              <p className="text-2xl md:text-5xl font-extrabold py-4">About Ajaza</p>
              <p className="mb-3 text-gray-700">Experience the pinnacle of luxury living at our exclusive property, where every detail has been meticulously crafted to provide an unparalleled retreat. Nestled in the heart of, this haven offers.</p>
              <div className="to-animate">
              <p className="text-gray-700 mb-2">
                &quot;Welcome Home&quot; ajaza is a place where each season offers a unique charm and every day feels like a getaway.
              </p>
              <p className="text-gray-700 mb-2">
                Flowers of spring, the sunny days of summer, the vibrant leaves of autumn, or the cozy ambiance of winter.
              </p>
              <OurButton name="About Us" pathLink="/about"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
