import Image from "next/image";

export default function Amenities() {
  return (
    <>
    <section id="amenities">
      <div className="container text-center p-4">
        <h2 className="text-2xl md:text-4xl font-bold py-7">Our Property Amenities</h2>
        <div data-aos="fade-up" className="collection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6 gap-4">

            <div data-aos="flip-right" className="text-center group">
            <div className="border-2 border-solid border-white relative bg-[#DEC678] inline-block text-center leading-[35px] font-bold p-[3px] w-[40px] h-[40px] 
rounded-full top-[50px] right-[-60px]  group-hover:animate-flip360">01</div>
            <Image
              className="rounded-full object-cover mb-6 mx-auto"
              width={160}
              height={160}
              src="/image-landing-circle.png"
              alt="New Construction Image"
            />
            <p className="font-bold text-lg lg:text-2xl mb-4">New Construction</p>
            <p className="text-base text-gray-700">Discover the epitome of luxury living ar Luxury every details</p>
          </div>
          <div data-aos="flip-left" className="md:block text-center">
            <div className="hidden lg:block h-[40px]"></div>
            <div className="border-2 border-solid border-white relative bg-[#DEC678] inline-block text-center leading-[35px] font-bold p-[3px] w-[40px] h-[40px] 
rounded-full top-[50px] right-[-60px]">02</div>
            <Image
              className="rounded-full object-cover mb-6 mx-auto"
              width={160}
              height={160}
              src="/image-landing-circle.png"
              alt="New Construction Image"
            />
            <p className="font-bold text-lg lg:text-2xl mb-4">Swimming Pool</p>
            <p className="text-base text-gray-700">Explore our meticulously best designed spaces and indulge.</p>
          </div>
          <div data-aos="flip-right" className="lg:block text-center">
            <div className="border-2 border-solid border-white relative bg-[#DEC678] inline-block text-center leading-[35px] font-bold p-[3px] w-[40px] h-[40px] 
rounded-full top-[50px] right-[-60px]">03</div>

            <Image
              className="rounded-full object-cover mb-6 mx-auto"
              width={160}
              height={160}
              src="/image-landing-circle.png"
              alt="New Construction Image"
            />
            <p className="font-bold text-lg lg:text-2xl mb-4">Fitness Facilities</p>
            <p className="text-base text-gray-700">Uncover the essence of luxury as you explore our exclusive.</p>
          </div>
          <div data-aos="flip-left" className="lg:block text-center">
            <div className="hidden lg:block h-[40px]"></div>

            <div className="border-2 border-solid border-white relative bg-[#DEC678] inline-block text-center leading-[35px] font-bold p-[3px] w-[40px] h-[40px] 
rounded-full top-[50px] right-[-60px]">04</div>

            <Image
              className="rounded-full object-cover mb-6 mx-auto"
              width={160}
              height={160}
              src="/image-landing-circle.png"
              alt="New Construction Image"
            />
            <p className="font-bold text-lg lg:text-2xl mb-4">Eco Construction</p>
            <p className="text-base text-gray-700">Step into sophistication and serenity at new construction.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
