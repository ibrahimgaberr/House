"use client";
import { TypeA, TypeB, TypeC, TypeD } from "@/data/data";
import MainSection from "../layout/mainSection";
import Image from "next/image";
import {
  BedDouble,
  Bath,
  UtensilsCrossed,
  Sun,
  Table,
  Shirt,
  DoorOpen,
  House,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

export default function MainApartment() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main section */}
      <MainSection name="Apartments" />

      {/* card */}

      <Tabs defaultValue="typeA">
        <TabsList className="mx-auto py-0 md:py-[27px] mt-20 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl transition-all duration-300 hover:scale-103">
          <TabsTrigger
            className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white"
            value="typeA"
          >
            Type A
          </TabsTrigger>
          <TabsTrigger
            className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white"
            value="typeB"
          >
            Type B
          </TabsTrigger>
          <TabsTrigger
            className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white"
            value="typeC"
          >
            Type C
          </TabsTrigger>
          <TabsTrigger
            className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white"
            value="typeD"
          >
            Type D
          </TabsTrigger>
        </TabsList>
        <TabsContent value="typeA">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 lg:p-20">
            {TypeA.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
              >
                {/* Image with hover effect */}
                <div className="overflow-hidden">
                  <Image
                    onClick={() => setOpen(true)}
                    width={500}
                    height={320}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-t-2xl transform transition-all duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </div>

                <div
                  className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 ${
                    open ? "block" : "hidden"
                  }`}
                >
                  <Image
                    onClick={() => setOpen(true)}
                    width={500}
                    height={320}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-[80%] h-72 object-cover rounded-t-2xl"
                  />
                  <button
                    className="bg-[#14453D] text-white px-4 py-2 rounded-lg cursor-pointer absolute top-5 right-5"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>

                {/* Content section */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  {/* Room features grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {item.rooms.map((roomObj, roomIndex) => {
                      const [roomType] = Object.keys(roomObj);
                      const roomName =
                        roomObj[roomType as keyof typeof roomObj];

                      return (
                        <div
                          key={roomIndex}
                          className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            {roomType.includes("bedroom") ? (
                              <BedDouble size={16} className="text-[#14453D]" />
                            ) : roomType.includes("bath") ? (
                              <Bath size={16} className="text-[#14453D]" />
                            ) : roomType.includes("kitchen") ? (
                              <UtensilsCrossed
                                size={16}
                                className="text-[#14453D]"
                              />
                            ) : roomType.includes("terrace") ? (
                              <Sun size={16} className="text-[#14453D]" />
                            ) : roomType.includes("dining") ? (
                              <Table size={16} className="text-[#14453D]" />
                            ) : roomType.includes("dressing") ? (
                              <Shirt size={16} className="text-[#14453D]" />
                            ) : (
                              <DoorOpen size={16} className="text-[#14453D]" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {roomName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="typeB">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 lg:p-20">
            {TypeB.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
              >
                {/* Image with hover effect */}
                <div className="overflow-hidden">
                  <Image
                    onClick={() => setOpen(true)}
                    width={500}
                    height={320}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-t-2xl cursor-pointer transform transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div
                  className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 ${
                    open ? "block" : "hidden"
                  }`}
                >
                  <Image
                    onClick={() => setOpen(true)}
                    width={500}
                    height={320}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-[80%] h-72 object-cover rounded-t-2xl"
                  />
                  <button
                    className="bg-[#14453D] text-white px-4 py-2 rounded-lg cursor-pointer absolute top-5 right-5"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
                {/* Content section */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  {/* Room features grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {item.rooms.map((roomObj, roomIndex) => {
                      const [roomType] = Object.keys(roomObj);
                      const roomName =
                        roomObj[roomType as keyof typeof roomObj];

                      return (
                        <div
                          key={roomIndex}
                          className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            {roomType.includes("bedroom") ? (
                              <BedDouble size={16} className="text-[#14453D]" />
                            ) : roomType.includes("bath") ? (
                              <Bath size={16} className="text-[#14453D]" />
                            ) : roomType.includes("kitchen") ? (
                              <UtensilsCrossed
                                size={16}
                                className="text-[#14453D]"
                              />
                            ) : roomType.includes("terrace") ? (
                              <Sun size={16} className="text-[#14453D]" />
                            ) : roomType.includes("dining") ? (
                              <Table size={16} className="text-[#14453D]" />
                            ) : roomType.includes("dressing") ? (
                              <Shirt size={16} className="text-[#14453D]" />
                            ) : (
                              <DoorOpen size={16} className="text-[#14453D]" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {roomName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="typeC">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 lg:p-20">
            {TypeC.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
              >
                {/* Image with hover effect */}
                <div className="overflow-hidden">
                  <Image
                    onClick={() => setOpen(true)}
                    width={500}
                    height={320}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-t-2xl cursor-pointer transform transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div
                  className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 ${
                    open ? "block" : "hidden"
                  }`}
                >
                  <Image
                    onClick={() => setOpen(true)}
                    width={500}
                    height={320}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-[80%] h-72 object-cover rounded-t-2xl"
                  />
                  <button
                    className="bg-[#14453D] text-white px-4 py-2 rounded-lg cursor-pointer absolute top-5 right-5"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
                {/* Content section */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  {/* Room features grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {item.rooms.map((roomObj, roomIndex) => {
                      const [roomType] = Object.keys(roomObj);
                      const roomName =
                        roomObj[roomType as keyof typeof roomObj];

                      return (
                        <div
                          key={roomIndex}
                          className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            {roomType.includes("bedroom") ? (
                              <BedDouble size={16} className="text-[#14453D]" />
                            ) : roomType.includes("bath") ? (
                              <Bath size={16} className="text-[#14453D]" />
                            ) : roomType.includes("kitchen") ? (
                              <UtensilsCrossed
                                size={16}
                                className="text-[#14453D]"
                              />
                            ) : roomType.includes("terrace") ? (
                              <Sun size={16} className="text-[#14453D]" />
                            ) : roomType.includes("dining") ? (
                              <Table size={16} className="text-[#14453D]" />
                            ) : roomType.includes("dressing") ? (
                              <Shirt size={16} className="text-[#14453D]" />
                            ) : (
                              <DoorOpen size={16} className="text-[#14453D]" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {roomName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="typeD">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 lg:p-20">
            {TypeD.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white"
              >
                {/* Image with hover effect */}
                <div className="overflow-hidden">
                  <Image
                    onClick={() => setOpen(true)}
                    width={500}
                    height={320}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-t-2xl cursor-pointer transform transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div
                  className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 ${
                    open ? "block" : "hidden"
                  }`}
                >
                  <Image
                    onClick={() => setOpen(true)}
                    width={500}
                    height={320}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-[80%] h-72 object-cover rounded-t-2xl"
                  />
                  <button
                    className="bg-[#14453D] text-white px-4 py-2 rounded-lg cursor-pointer absolute top-5 right-5"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
                {/* Content section */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {item.title}
                  </h3>
                  {/* Room features grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {item.rooms.map((roomObj, roomIndex) => {
                      const [roomType] = Object.keys(roomObj);
                      const roomName =
                        roomObj[roomType as keyof typeof roomObj];

                      return (
                        <div
                          key={roomIndex}
                          className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            {roomType.includes("bedroom") ? (
                              <BedDouble size={16} className="text-[#14453D]" />
                            ) : roomType.includes("bath") ? (
                              <Bath size={16} className="text-[#14453D]" />
                            ) : roomType.includes("kitchen") ? (
                              <UtensilsCrossed
                                size={16}
                                className="text-[#14453D]"
                              />
                            ) : roomType.includes("terrace") ? (
                              <Sun size={16} className="text-[#14453D]" />
                            ) : roomType.includes("dining") ? (
                              <Table size={16} className="text-[#14453D]" />
                            ) : roomType.includes("dressing") ? (
                              <Shirt size={16} className="text-[#14453D]" />
                            ) : roomType.includes("living") ? (
                              <House size={16} className="text-[#14453D]" />
                            ) : (
                              <DoorOpen size={16} className="text-[#14453D]" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {roomName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
