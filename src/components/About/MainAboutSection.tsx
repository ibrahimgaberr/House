"use client";
import Image from "next/image";
import "aos/dist/aos.css";
import OurButton from "@/components/layout/button";
import MainSection from "../layout/mainSection";
import CountUp from "react-countup";

export default function MainAboutSection() {
  return (
    <>
      {/* Main section */}
      <MainSection name="About Agent" />
      {/* Main section */}

      {/* main heading */}
      {/* second */}
      <section id="about-ajaza">
        <div className="py-25">
          <div className="container">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-3">
              <div className="w-full xl:w-1/2 relative z-1 pl-0 lg:pl-5 over">
                <div className="img1 mb-5 flex justify-center xl:block">
                  <Image
                    width={400}
                    height={440}
                    src="/house1.png"
                    className="rounded-4xl"
                    alt="House"
                  />
                </div>
                <div className="hidden xl:block img2 absolute bottom-10 left-20 z-10">
                  <Image
                    width={400}
                    height={440}
                    className="rounded-4xl"
                    src="/about/property-img13.png"
                    alt="House"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  />
                </div>
              </div>
              <div className="w-full xl:w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-[500px] text-left">
                <h1
                  data-aos="zoom-in"
                  className="bg-gray-200/70 text-[#446A64] uppercase  text-md lg:text-base inline-block p-2 rounded-3xl w-fit"
                >
                  <span className="font-bold">Ajaza</span> Compound
                </h1>
                <p className="py-5">
                  The project boasts an array of amenities, Imagine starting
                  your day with a refreshing swim in one of our FIVE expansive
                  pools enjoying serene moments with their connected lagoons.
                  The clubhouse and gym facility cater to active lifestyles,
                  while electric car charging points promote sustainable living.
                  Children can explore their imagination in Ajaza’s Central
                  Park, while adults shop for essentials at our Mega Hypermarket
                  or indulge in retail therapy at the adjacent Shopping Mall.
                  Health needs are met with ease at our on-site Medical Clinic,
                  ensuring peace of mind for all. Sports enthusiasts can engage
                  in friendly matches at our dedicated padel court
                </p>
                <p data-aos="zoom-in" className="mb-3 text-black">
                  At ajaza, experience the vibrant community mood, where
                  everyday essentials blend seamlessly with a strong sense of
                  belonging. A peaceful Mosque is nearby, and a fully integrated
                  Medical Facility is ready to provide excellent care for the
                  whole community. 
                </p>
                <div className="counter grid grid-cols-2 gap-15 font-bold text-[#14453D] mt-5">
                  <div>
                    <div className="text-4xl">
                      <CountUp start={0} end={1000} duration={1.5} />+
                    </div>
                    <p className="text-[#14453D] text-2xl">Comfortable</p>
                  </div>
                  <div>
                    <div className="text-4xl">
                      <CountUp start={0} end={1000} duration={1.5} />+
                    </div>
                    <p className="text-2xl">Privacy & Security</p>
                  </div>
                  <div>
                    <div className="text-4xl">
                      <CountUp start={0} end={100} duration={2} />%
                    </div>
                    <p className="text-[#14453D] text-2xl">
                      Successful Project
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl">
                      <CountUp start={0} end={100} duration={2} />%
                    </div>
                    <p className="text-2xl">Satisfied Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* second */}
      {/* Third */}
      <section id="about-elsewhere">
        <div className="about py-25 overflow-hidden bg-[#F1F4F3]">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
              <div className="w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-[500px] text-center lg:text-left">
                <p
                  data-aos="zoom-in"
                  className="mb-3 bg-gray-200/70 text-[#446A64] text-center uppercase  text-md lg:text-base inline-block p-2 rounded-3xl w-fit"
                >
                  <span className="font-bold">Elsewhere</span> Developer
                </p>
                <p className="text-2xl md:text-4xl font-bold mb-5 text-black py-5 leading-9 lg:leading-12">
                  We Offer The Best City Apartments
                </p>
                <p data-aos="zoom-in" className="py-3 text-black leading-7">
                  MMG holding established in 2001 owns a number of reputable 
companies under its umbrella, AL MOTAHEDA for 23 years, Raya for construction, and their final addition <span className="font-bold">(,ELSEWHERE)</span>
a property development company a game changer in the Alexandrian market.
Elsewhere is a property developer that is leading the market in waves unlike the ordinary owning a respected landbank, their first project launch ajaza is an unwavering project
in Al Alamein.
                </p>
                <div className="mb-5 md:mb-0 mt-2">
                  <OurButton name="More About the Developer" pathLink="/elsewhere" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative z-1 pl-0 lg:pl-5 over -mt-0 xl:-mt-34">
                <div className="img1 mb-4 flex justify-center lg:block">
                  <Image
                    width={400}
                    height={440}
                    className="rounded-4xl"
                    src="/about/about-img1.png"
                    alt="House"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  />
                </div>
                <div className="hidden xl:block img2 absolute top-50 left-50 z-10">
                  <Image
                    width={400}
                    height={440}
                    className="rounded-4xl"
                    src="/about/about-img2.png"
                    alt="House"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  />
                </div>

                <div className="hidden lg:block lines absolute top-[-11%] left-0 z-[-1]">
                  <Image
                    className="block rounded-4xl"
                    width={50}
                    height={50}
                    src="/about/elements12.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Third */}
    </>
  );
}
