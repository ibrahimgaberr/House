import { apartmentData } from "@/data/data";
import MainSection from "../layout/mainSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { BedDouble, Bath } from "lucide-react";
import Link from "next/link";

export default function MainApartment() {
  const cardsForTab: number = 6;
  const totalCards: number = apartmentData.length;
  const tabCount: number = Math.ceil(totalCards / cardsForTab);

  return (
    <>
      {/* Main section */}
      <MainSection name="Apartments" />
      {/* Main section */}
      {/* Cards */}
      <Tabs defaultValue="tab1">
        <TabsList className="mx-auto py-0 md:py-[27px] mt-20 gap-0 md:gap-3 bg-gray-200/60 rounded-3xl">
          {Array.from({ length: tabCount }).map((_, index) => (
            <TabsTrigger
              key={`tab${index + 1}`}
              value={`tab${index + 1}`}
              className="py-5 px-7 md:px-10 rounded-3xl text-2xl cursor-pointer !bg-none
                        data-[state=active]:!bg-sky-600 data-[state=active]:!text-white focus:!bg-sky-600
                        focus:!text-white"
            >
              Tab {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* TabsContent */}
        {Array.from({ length: tabCount }).map((_, index) => {
          const startIdx = index * cardsForTab;
          const endIdx = startIdx + cardsForTab;
          const tabItems = apartmentData.slice(startIdx, endIdx);

          return (
            <TabsContent key={`content-${index + 1}`} value={`tab${index + 1}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
                {tabItems.map((item, itemIndex) => (
                  <div
                    key={`item-${startIdx + itemIndex}`}
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
                          alt={item.name}
                          className="w-full h-80 object-cover rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:rounded-2xl"
                          />


                        {/* Overlay that slides up */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                          <div className="w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 text-white"></div>
                        </div>
                      </div>
                       </Link>
                      <h3 className="text-xl mb-3 p-4 font-semibold">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 pl-4 pb-4">
                        <span>
                          <BedDouble
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.details.beds}
                        </span>
                        <span>
                          <Bath
                            size={20}
                            strokeWidth={1.75}
                            className="inline-block"
                          />{" "}
                          x{item.details.baths}
                        </span>
                        <span>{item.details.area}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
      {/* Cards */}
    </>
  );
}