import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { BedDouble, Bath, Bubbles, MoveUpRight } from "lucide-react";
import { exploreData } from "@/data/data";

export default function Explore() {
  return (
    <>
    <section id="explore">
      <section className="Explore mb-3 p-7 mt-5 md:mt-35 lg:p-0">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            Explore Our Premier Of <br /> Single Property Retreat
          </h1>
        </div>
        <div className="tabs text-center">
          <Tabs defaultValue="one">
            <TabsList className="mx-auto py-0 md:py-[27px] my-4 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl">
            {exploreData.map((tab) => 
            <TabsTrigger key={tab.id} className="py-0 md:py-5 px-5 md:px-10 rounded-3xl text-sm md:text-2xl cursor-pointer !bg-none
             data-[state=active]:!bg-sky-600 data-[state=active]:!text-white focus:!bg-sky-600
              focus:!text-white" value={tab.value}>{tab.title}</TabsTrigger>
            )}
            </TabsList>
            {exploreData.map((item) => 

            <TabsContent value={item.value} key={item.id}>
              <div className="mx-auto">
                <div className="flex flex-col xl:flex-row gap-2 justify-center items-center">
                  <div>
                    <Image
                      className="rounded-2xl"
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      width={600}
                      height={250}
                      src={item.property.images.main}
                      alt="Image"
                    />
                    <div className="hidden xl:flex py-2" data-aos="fade-up" data-aos-duration="500">
                      <Image
                      className="rounded-2xl"
                        width={300}
                        height={225}
                        src={item.property.images.secondary[0]}
                        alt="Image"
                      />
                      <Image
                        className="ml-3 rounded-2xl"
                        width={290}
                        height={225}
                        src={item.property.images.secondary[1]}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Image
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
            )}
          </Tabs>
        </div>
      </section>
    </section>
    </>
  );
}
