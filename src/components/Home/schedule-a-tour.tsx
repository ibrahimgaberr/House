import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ScheduleATour() {
    return (
  <>
    <section id="schedule">
      <div className="schedule py-5 bg-[#14453D] overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
            <div className="w-1/2 relative z-1 pl-5 over">

                <div className="img1 mb-4">
                  <Image width={300} height={340} src="/house1.png" alt="House" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                </div>
                <div className="hidden lg:block img2 absolute bottom-10 left-20 z-10">
                  <Image width={300} height={340} src="/house2.png" alt="House" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
                </div>

                      <div className="lines absolute bottom-[-30%] left-[-15%] z-0">
                        <Image
                          className="hidden lg:block"
                          width={600}
                          height={600}
                          src="/white-lines.png"
                          alt="Image"
                        />
                      </div>
            </div>
            <div className="w-1/2 lg:flex lg:flex-col lg:justify-center lg:h-[500px] text-center lg:text-left">
              <p data-aos="zoom-in" className="bg-gray-200/10 text-white uppercase text-lg inline-block p-2 rounded-3xl w-fit">schedule a tour</p>
              <p className="text-4xl text-white font-extrabold py-4 leading-12">Home Waiting For You <br/>Here Schedule A Tour</p>
              <p data-aos="zoom-in" className="mb-3 text-gray-200">Indulge in the epitome of luxury living at Luxury, where every amenity is meticulously designed to elevate your lifestyle.</p>
              <div className="to-animate">
              <Button className="relative z-1 custom-after rounded-4xl text-black bg-amber-200 border-0 py-6 my-2 cursor-pointer hover:text-white" variant="outline">
                <Link href={'#home'}>View Our Property</Link>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
    );
}

