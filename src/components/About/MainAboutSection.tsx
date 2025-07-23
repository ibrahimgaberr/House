
'use client'
import Image from "next/image";
import 'aos/dist/aos.css';
import OurButton from "@/components/layout/button";
import MainSection from '../layout/mainSection'

export default function MainAboutSection() {

    return (
    <>
    {/* Main section */}
    <MainSection name="About Agent"/>
    {/* Main section */}

    {/* main heading */}
    {/* second */}
    <section id="about">
          <div className="about py-15 overflow-hidden">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
                <div className="w-1/2 relative z-1 pl-0 lg:pl-5 over">

                    <div className="img1 mb-4 flex justify-center lg:block">
                      <Image width={400} height={440} src="/house1.png" alt="House" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                    </div>
                    <div className="hidden lg:block img2 absolute bottom-10 left-20 z-10">
                      <Image width={400} height={440} src="/about/property-img13.png" alt="House" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                    </div>

                          <div className="lines absolute bottom-[-10%] left-[-25%] z-[-1]">
                            <Image
                              className="block"
                              width={700}
                              height={700}
                              src="/lines.png"
                              alt="Image"
                            />
                          </div>
                </div>
                <div className="w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-[500px] text-center lg:text-left">
                  <p data-aos="zoom-in" className="bg-gray-200/70 text-[#446A64] text-center uppercase  text-md lg:text-base inline-block p-2 rounded-3xl w-fit">
                  Real Estate Agent
                  </p>
                  <p className="text-2xl md:text-4xl font-bold mb-5 text-black py-4 leading-9 lg:leading-12">
                    Hi, I&apos;m Alex Roy, Your Apartment Agent
                  </p>
                  <p data-aos="zoom-in" className="mb-3 text-black">Indulge in the epitome of luxury living at Luxury, where every amenity is meticulously designed to elevate your lifestyle.</p>
                <OurButton name="View Our Property" pathLink="#" />
                </div>
              </div>
            </div>
          </div>
    </section>
    {/* second */}
    {/* Third */}
    <section id="about">
          <div className="about py-25 overflow-hidden bg-[#F1F4F3]">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
                <div className="w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-[500px] text-center lg:text-left">
                  <p data-aos="zoom-in" className="mb-3 bg-gray-200/70 text-[#446A64] text-center uppercase  text-md lg:text-base inline-block p-2 rounded-3xl w-fit">
                  CITY APARTMENT
                  </p>
                  <p className="text-2xl md:text-4xl font-bold mb-5 text-black py-5 leading-9 lg:leading-12">
                    We Offer The Best City Apartments
                  </p>
                  <p data-aos="zoom-in" className="py-1 text-black leading-7">We offer the best city apartments tailored to your urban lifestyle. Whether you&apos;re seeking a chic downtown loft or a serene uptown retreat, our diverse portfolio ensures</p>
                  <p data-aos="zoom-in" className="mb-3 py-5 text-black leading-7">Dedicated apartment specialists, we are committed to providing personalized service, guiding you through an every step of your apartment search with expertise.</p>
                <div className="mb-5 md:mb-0">
                  <OurButton  name="View Our Property" pathLink="#" />
                </div>
                </div>
                <div className="w-1/2 relative z-1 pl-0 lg:pl-5 over -mt-0 xl:-mt-34">

                    <div className="img1 mb-4 flex justify-center lg:block">
                      <Image width={400} height={440} className="rounded-3xl" src="/about/about-img1.png" alt="House" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                    </div>
                    <div className="hidden lg:block img2 absolute top-50 left-50 z-10">
                      <Image width={400} height={440} className="rounded-3xl" src="/about/about-img2.png" alt="House" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                    </div>

                          <div className="hidden lg:block lines absolute top-[-11%] left-0 z-[-1]">
                            <Image
                              className="block"
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

)
}