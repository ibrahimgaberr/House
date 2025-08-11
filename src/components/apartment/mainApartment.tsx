import { typeARoom1, typeARoom2, typeARoom3, 
  typeBRoom1, typeBRoom2, typeBRoom3,
  typeCRoom2, typeCRoom3 , typeCRoom4,
  typeDRoom2, typeDRoom3, typeDRoom4 } from "@/data/data";
import MainSection from "../layout/mainSection";
import Image from "next/image";
import { BedDouble, Bath } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function MainApartment() {

  return (
    <>
      {/* Main section */}
      <MainSection name="Apartments" />
      {/* Main section */}
      {/* Cards */}
      <Tabs defaultValue="typeA">
        {/* Parent Tabs */}
        <TabsList className="mx-auto py-0 md:py-[27px] mt-20 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl">
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

        {/* Parent 1 Content */}
        <TabsContent value="typeA">
          {/* Child Tabs inside Parent 1 */}
          <Tabs defaultValue="1room">
            <TabsList className="mx-auto py-0 md:py-[15px] mt-3 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl">
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="1room">1 Room</TabsTrigger>
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="2rooms">2 Rooms</TabsTrigger>
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="3rooms">3 Rooms</TabsTrigger>
            </TabsList>
            <TabsContent value="1room">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-5 lg:p-20">
              {typeARoom1.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
            <TabsContent value="2rooms">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeARoom2.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
            <TabsContent value="3rooms">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeARoom3.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* Parent 2 Content */}
        <TabsContent value="typeB"> 
          {/* Child Tabs inside Parent 2 */}
          <Tabs defaultValue="1room">
            <TabsList className="mx-auto py-0 md:py-[15px] mt-3 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl">
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="1room">1 Room</TabsTrigger>
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="2room">2 Rooms</TabsTrigger>
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="3room">3 Rooms</TabsTrigger>
            </TabsList>
            <TabsContent value="1room">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeBRoom1.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
            <TabsContent value="2room">
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeBRoom2.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
            <TabsContent value="3room">
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeBRoom3.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
        {/* Parent 3 Content */}
        <TabsContent value="typeC">
          {/* Child Tabs inside Parent 2 */}
          <Tabs defaultValue="2rooms">
            <TabsList className="mx-auto py-0 md:py-[15px] mt-3 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl">
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="2rooms">2 Rooms</TabsTrigger>
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="3rooms">3 Rooms</TabsTrigger>
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="4rooms">4 Rooms</TabsTrigger>
            </TabsList>
            <TabsContent value="2rooms">
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeCRoom2.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
            <TabsContent value="3rooms">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeCRoom3.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
            <TabsContent value="4rooms">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeCRoom4.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
        {/* Parent 4 Content */}
        <TabsContent value="typeD">
          {/* Child Tabs inside Parent 2 */}
          <Tabs defaultValue="2rooms">
            <TabsList className="mx-auto py-0 md:py-[15px] mt-3 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl">
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="2rooms">2 Rooms</TabsTrigger>
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="3rooms">3 Rooms</TabsTrigger>
              <TabsTrigger className="py-2 md:py-5 px-2 md:px-10 rounded-3xl text-base md:text-2xl cursor-pointer !bg-none data-[state=active]:!bg-[#14453D]
           data-[state=active]:!text-white" value="4rooms">4 Rooms</TabsTrigger>
            </TabsList>
            <TabsContent value="2rooms">
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeDRoom2.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
            <TabsContent value="3rooms">
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeDRoom3.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
            <TabsContent value="4rooms">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-20">
              {typeDRoom4.map((item) => 
              <div key={item.id}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-2">
                      {/* Image container with overlay */}
                       <Link
                        href={`/apartment/${item.id}`}
                        className="cursor-pointer"
                       >
                      <div className="relative overflow-hidden rounded">
                         <Image
                          width={100}
                          height={148}
                          src={item.images.imgURL[0]}
                          alt="image"
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.subDescription}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bedrooms}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.bathrooms}
                        </span>
                      </div>
                    </div>
                    </div>
                  )}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
      {/* Cards */}
    </>
  );
}