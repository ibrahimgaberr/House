'use client'
import Image from "next/image";



export default function ScheduleATour() {
    return (
  <>
    <section id="schedule-a-tour">
      <div className="schedule-a-tour py-5 bg-[#14453D] overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
            <div className="w-full lg:w-1/2 relative z-1 pl-0 lg:pl-5 over">

                <div className="img1 mb-4 flex justify-center lg:block">
                  <Image width={300} height={340} className="rounded-4xl" src="/house1.png" alt="House" />
                </div>
                <div className="hidden lg:block img2 absolute bottom-10 left-20 z-10">
                  <Image width={300} height={340} className="rounded-4xl" src="/house2.png" alt="House" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-[500px] text-center lg:text-left">
              <p data-aos="zoom-in" className="bg-gray-200/10 text-white text-center uppercase  text-md lg:text-base inline-block p-2 rounded-3xl w-fit">schedule a tour</p>
              <p className="text-2xl md:text-4xl font-bold mb-5 text-white py-4 leading-9 lg:leading-12">Home Waiting For You <br/>Here Schedule A Tour</p>
              <p className="mb-3 text-gray-200">Indulge in the epitome of luxury living at Luxury, where every amenity is meticulously designed to elevate your lifestyle.</p>
              <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="!text-left w-fit p-[15px] font-bold text-lg rounded-4xl text-[#14453D] bg-[#DEC778] border-0 cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
    );
}