// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
// import { BedDouble, Bath, Bubbles, MoveUpRight } from "lucide-react";
// import { exploreData } from "@/data/data";
import Link from 'next/link';

export default function Explore() {
  return (
    <>
        {/* <section id="explore" className="mb-3 p-7 mt-5 md:mt-35 lg:p-0">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-5">
              Explore Our Premier Apartment
            </h1>
          </div>
          <div className="tabs text-center">
            <Tabs defaultValue="one">
              <TabsList className="mx-auto py-0 md:py-[15px] mt-8 mb-8 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl">
                {exploreData.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    className="py-3 px-5 md:px-8 rounded-3xl text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D] data-[state=active]:!text-white"
                    value={tab.value}
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {exploreData.map((item) => (
                <TabsContent value={item.value} key={item.id}>
                  <div className="mx-auto">
                    <div className="flex flex-col xl:flex-row gap-2 justify-center items-center">
                      <div>
                        <Image
                          className="rounded-4xl"
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                          width={600}
                          height={250}
                          src={item.property.images.main}
                          alt="Image"
                        />
                        <div
                          className="hidden xl:flex py-2"
                        >
                          <Image
                            className="rounded-4xl"
                            width={300}
                            height={225}
                            src={item.property.images.secondary[0]}
                            alt="Image"
                          />
                          <Image
                            className="ml-3 rounded-4xl"
                            width={290}
                            height={225}
                            src={item.property.images.secondary[1]}
                            alt="Image"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          className="rounded-4xl"
                          data-aos="fade-left"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                          width={600}
                          height={500}
                          src={item.property.images.secondary[1]}
                          alt="Image"
                        />
                        <div className="flex justify-between items-center rounded-2xl bg-white p-4 w-[80%] absolute bottom-10 left-[50%] transform -translate-x-[50%]">
                          <div>
                            <p className="font-bold text-sm md:text-3xl py-3 text-left">
                              {item.property.name}
                            </p>
                            <div className="hidden md:flex text-gray-500">
                              <p className="mr-5 text-2xl">
                                <BedDouble
                                  size={20}
                                  strokeWidth={1.75}
                                  className="inline-block"
                                />
                                {item.property.details.beds}{" "}
                              </p>
                              <p className="mr-5 text-2xl">
                                <Bath
                                  size={20}
                                  strokeWidth={1.75}
                                  className="inline-block"
                                />
                                {item.property.details.baths}{" "}
                              </p>
                              <p className="text-2xl">
                                <Bubbles
                                  size={20}
                                  strokeWidth={1.75}
                                  className="inline-block"
                                />{" "}
                                {item.property.details.area}
                              </p>
                            </div>
                          </div>
                          <div className="bg-[#14453D] w-[40px] h-[40px] md:w-[70px] md:h-[70px] p-2 cursor-pointer text-white rounded-full flex items-center justify-center transform transition-all duration-300 hover:rotate-45">
                            <MoveUpRight size={32} strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section> */}


<section id="explore" className="p-10">
  <h1 className="p-5 font-bold text-xl md:text-3xl underline text-[#14453D] whitespace-nowrap">
    Apartment Types:
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
    {/* Type A */}
    <Link href={`/apartment`}> 
      <div className="min-h-[208px] bg-gradient-to-r from-[#b3cdc7] to-[#d9ece8] shadow-md p-8 rounded-3xl border border-[#14453D]/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
        {/* Centered Title with Decorative Lines */}
        <div className="flex items-center justify-center mb-6">
          <span className="flex-1 border-t-2 border-[#14453D]/40"></span>
          <h2 className="mx-6 text-lg md:text-3xl font-extrabold text-[#14453D] tracking-wide uppercase">
            Type A
          </h2>
          <span className="flex-1 border-t-2 border-[#14453D]/40"></span>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={"/slider/01-Cam04-bedroom.webp"}
              className="rounded-full ring-4 ring-[#14453D]/20 shadow-md hover:shadow-lg transition-all duration-300"
              width={220}
              height={220}
              alt="image"
            />
          </div>

          {/* Features List */}
          <div>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 leading-relaxed">
              <li>1 - 3 Bedrooms</li>
              <li>2 Bathrooms</li>
              <li>Balcony with City View</li>
            </ul>
          </div>
        </div>
      </div>
    </Link> 
    {/* Type B */}
    <Link href={`/apartment`}> 
      {/* <div className="min-h-[208px] bg-gradient-to-r from-[#e6f4f1] to-white shadow-lg p-6 rounded-4xl  transition hover:scale-[1.02] hover:shadow-xl">
        <h2 className="text-xl font-bold text-[#14453D] mb-2">Type B</h2>
        <p className="text-gray-700 leading-relaxed">
          Cozy 2-bedroom unit perfect for small families, featuring efficient space use and natural light.
        </p>
        <ul className="list-disc list-inside text-sm mt-3 text-gray-600">
          <li>2 Bedrooms</li>
          <li>1 Bathroom</li>
          <li>Open kitchen concept</li>
        </ul>
      </div> */}
      <div className="min-h-[208px] bg-gradient-to-r from-[#b3cdc7] to-[#d9ece8] shadow-md p-8 rounded-3xl border border-[#14453D]/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">

  <div className="flex items-center justify-center mb-6">
    <span className="flex-1 border-t-2 border-[#14453D]/40"></span>
    <h2 className="mx-6 text-lg md:text-3xl font-extrabold text-[#14453D] tracking-wide uppercase">
      Type B
    </h2>
    <span className="flex-1 border-t-2 border-[#14453D]/40"></span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">

    <div className="flex justify-center">
      <Image
        src={"/slider/01-Cam07-Parking.webp"}
        className="rounded-full ring-4 ring-[#14453D]/20 shadow-md hover:shadow-lg transition-all duration-300"
        width={220}
        height={220}
        alt="image"
      />
    </div>

    <div>
      <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 leading-relaxed">
        <li>1 - 3 Bedrooms</li>
        <li>2 Bathrooms</li>
        <li>Balcony with City View</li>
      </ul>
    </div>
  </div>
      </div>
    </Link>
    {/* Type C */}
    <Link href={`/apartment`}> 
      {/* <div className="min-h-[208px] bg-gradient-to-r from-[#e6f4f1] to-white shadow-lg p-6 rounded-4xl  transition hover:scale-[1.02] hover:shadow-xl">
        <h2 className="text-xl font-bold text-[#14453D] mb-2">Type C</h2>
        <p className="text-gray-700 leading-relaxed">
          Modern 1-bedroom apartment ideal for singles or couples, offering stylish interiors.
        </p>
        <ul className="list-disc list-inside text-sm mt-3 text-gray-600">
          <li>1 Bedroom</li>
          <li>1 Bathroom</li>
          <li>Compact yet stylish</li>
        </ul>
      </div> */}
        <div className="min-h-[208px] bg-gradient-to-r from-[#b3cdc7] to-[#d9ece8] shadow-md p-8 rounded-3xl border border-[#14453D]/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">

    <div className="flex items-center justify-center mb-6">
      <span className="flex-1 border-t-2 border-[#14453D]/40"></span>
      <h2 className="mx-6 text-lg md:text-3xl font-extrabold text-[#14453D] tracking-wide uppercase">
        Type C
      </h2>
      <span className="flex-1 border-t-2 border-[#14453D]/40"></span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">

      <div className="flex justify-center">
        <Image
          src={"/slider/01-Cam08-building-balcony.webp"}
          className="rounded-full ring-4 ring-[#14453D]/20 shadow-md hover:shadow-lg transition-all duration-300"
          width={220}
          height={220}
          alt="image"
        />
      </div>

      <div>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 leading-relaxed">
          <li>2 - 4 Bedrooms</li>
          <li>3 Bathrooms</li>
          <li>Balcony with City View</li>
          <li>Etc ...</li>
        </ul>
      </div>
    </div>
        </div>
    </Link>
    {/* Type D */}
    <Link href={`/apartment`}> 
      {/* <div className="min-h-[208px] bg-gradient-to-r from-[#e6f4f1] to-white shadow-lg p-6 rounded-4xl  transition hover:scale-[1.02] hover:shadow-xl">
        <h2 className="text-xl font-bold text-[#14453D] mb-2">Type D</h2>
        <p className="text-gray-700 leading-relaxed">
          Luxury penthouse with panoramic views, large terrace, and premium finishes.
        </p>
        <ul className="list-disc list-inside text-sm mt-3 text-gray-600">
          <li>4 Bedrooms</li>
          <li>3 Bathrooms</li>
          <li>Private terrace</li>
        </ul>
      </div> */}
        <div className="min-h-[208px] bg-gradient-to-r from-[#b3cdc7] to-[#d9ece8] shadow-md p-8 rounded-3xl border border-[#14453D]/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">

    <div className="flex items-center justify-center mb-6">
      <span className="flex-1 border-t-2 border-[#14453D]/40"></span>
      <h2 className="mx-6 text-lg md:text-3xl font-extrabold text-[#14453D] tracking-wide uppercase">
        Type D
      </h2>
      <span className="flex-1 border-t-2 border-[#14453D]/40"></span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">

      <div className="flex justify-center">
        <Image
          src={"/slider/01-Cam10-Clubhouse-spring.webp"}
          className="rounded-full ring-4 ring-[#14453D]/20 shadow-md hover:shadow-lg transition-all duration-300"
          width={220}
          height={220}
          alt="image"
        />
      </div>

      <div>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-700 leading-relaxed">
          <li>2 - 4 Bedrooms</li>
          <li>3 Bathrooms</li>
          <li>Balcony with City View</li>
          <li>Etc ...</li>
        </ul>
      </div>
    </div>
        </div>
    </Link>
  </div>
</section>
    </>
  );
}
