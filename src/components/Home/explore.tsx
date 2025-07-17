import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { BedDouble, Bath, Bubbles, MoveUpRight } from "lucide-react";

export default function Explore() {
  return (
    <>
    <section id="explore">
      <section className="Explore mb-3 p-7 mt-5 md:mt-35 lg:p-0">
        <div className="text-center">
          <h5 className="bg-gray-100/60 uppercase text-base inline-block p-3 mb-3 rounded-3xl w-fit">
            our best properties
          </h5>
          <h1 className="text-sm font-bold mb-5">
            Explore Our Premier Of <br /> Single Property Retreat
          </h1>
        </div>
        <div className="tabs text-center">
          <Tabs defaultValue="one">
            <TabsList className="mx-auto my-4 p-5  bg-gray-100/60 rounded-3xl w-fit">
              <TabsTrigger className="p-5 rounded-3xl  cursor-pointer" value="one">One</TabsTrigger>
              <TabsTrigger className="p-5 rounded-3xl  cursor-pointer" value="two">Two</TabsTrigger>
              <TabsTrigger className="p-5 rounded-3xl  cursor-pointer" value="three">Three</TabsTrigger>
            </TabsList>
            <TabsContent value="one">
              <div className="mx-auto">
                <div className="flex flex-col xl:flex-row gap-2 justify-center items-center">
                  <div>
                    <Image
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      width={600}
                      height={250}
                      src="/explore1.png"
                      alt="Image"
                    />
                    <div className="hidden xl:flex py-2" data-aos="fade-up" data-aos-duration="500">
                      <Image
                        width={300}
                        height={225}
                        src="/explore1.png"
                        alt="Image"
                      />
                      <Image
                        className="ml-3"
                        width={290}
                        height={225}
                        src="/explore2.png"
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
                      src="/explore2.png"
                      alt="Image"
                    />
                    <div className="flex justify-between items-center rounded-2xl bg-white p-4 w-[80%] absolute bottom-10 left-[50%] transform -translate-x-[50%]">
                      <div>
                        <p className="font-bold text-3xl py-3">
                          Luxury Suite Villa
                        </p>
                        <div className="flex text-gray-500">
                          <p className="mr-5 text-2xl">
                            <BedDouble
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            x2{" "}
                          </p>
                          <p className="mr-5 text-2xl">
                            <Bath
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            x2{" "}
                          </p>
                          <p className="text-2xl">
                            <Bubbles
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            2000 sq
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#14453D] w-[70px] h-[70px] p-2 cursor-pointer text-white circle flex items-center justify-center transform transition-all duration-300 hover:rotate-45">
                        <MoveUpRight size={32} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="two">
              <div className="mx-auto">
                <div className="flex flex-col xl:flex-row gap-2 justify-center items-center">
                  <div>
                    <Image
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      width={600}
                      height={250}
                      src="/explore1.png"
                      alt="Image"
                    />
                    <div className="hidden xl:flex py-2" data-aos="fade-up" data-aos-duration="500">
                      <Image
                        width={300}
                        height={225}
                        src="/explore2.png"
                        alt="Image"
                      />
                      <Image
                        className="ml-3"
                        width={290}
                        height={225}
                        src="/explore1.png"
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
                      src="/explore2.png"
                      alt="Image"
                    />
                    <div className="flex justify-between items-center rounded-2xl bg-white p-4 w-[80%] absolute bottom-10 left-15">
                      <div>
                        <p className="font-bold text-3xl py-3">
                          Luxury Suite Villa
                        </p>
                        <div className="flex text-gray-500">
                          <p className="mr-5 text-2xl">
                            <BedDouble
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            x2{" "}
                          </p>
                          <p className="mr-5 text-2xl">
                            <Bath
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            x2{" "}
                          </p>
                          <p className="text-2xl">
                            <Bubbles
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            2000 sq
                          </p>
                        </div>
                      </div>
                      <div className="bg-sky-800 w-[70px] h-[70px] p-2 text-white circle flex items-center justify-center">
                        <MoveUpRight size={32} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="three">
              <div className="mx-auto">
                <div className="flex flex-col xl:flex-row gap-2 justify-center items-center">
                  <div>
                    <Image
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                      width={600}
                      height={250}
                      src="/explore1.png"
                      alt="Image"
                    />
                    <div className="hidden xl:flex py-2" data-aos="fade-up" data-aos-duration="500">
                      <Image
                        width={300}
                        height={225}
                        src="/explore1.png"
                        alt="Image"
                      />
                      <Image
                        className="ml-3"
                        width={290}
                        height={225}
                        src="/explore2.png"
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
                      src="/explore2.png"
                      alt="Image"
                    />
                    <div className="flex justify-between items-center rounded-2xl bg-white p-4 w-[80%] absolute bottom-10 left-15">
                      <div>
                        <p className="font-bold text-3xl py-3">
                          Luxury Suite Villa
                        </p>
                        <div className="flex text-gray-500">
                          <p className="mr-5 text-2xl">
                            <BedDouble
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            x2{" "}
                          </p>
                          <p className="mr-5 text-2xl">
                            <Bath
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            x2{" "}
                          </p>
                          <p className="text-2xl">
                            <Bubbles
                              size={20}
                              strokeWidth={1.75}
                              className="inline-block"
                            />{" "}
                            2000 sq
                          </p>
                        </div>
                      </div>
                      <div className="bg-sky-800 w-[70px] h-[70px] p-2 text-white circle flex items-center justify-center">
                        <MoveUpRight size={32} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </section>
    </>
  );
}
