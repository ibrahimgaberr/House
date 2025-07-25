import { newsData } from "@/data/data";
import MainSection from "../layout/mainSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { UserRound, CalendarDays, MoveUpRight } from "lucide-react";

export default function MainNews() {
  const cardsForTab: number = 6;
  const totalCards: number = newsData.length;
  const tabCount: number = Math.ceil(totalCards / cardsForTab);

  return (
    <>
      {/* Main section */}
      <MainSection name="News" />
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
          const tabItems = newsData.slice(startIdx, endIdx);

          return (
            <TabsContent key={`content-${index + 1}`} value={`tab${index + 1}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-15 p-25">
                {tabItems.map((item, itemIndex) => (
                  <div
                    key={`item-${startIdx + itemIndex}`}
                    className="relative rounded-2xl shadow-md hover:shadow-none group"
                  >
                    {/* Image with overlay container */}

                    <Image
                      className="rounded-2xl w-full transition-all transition-duration-300 group-hover:rotate-1"
                      width={400}
                      height={400}
                      src={item.images.imgURL}
                      alt="Image"
                    />

                    {/* Content div */}
                    <div className="absolute rounded-2xl bg-white p-4 -bottom-10 w-[80%] left-[50%] transform -translate-x-1/2 rounded-b-2xl">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <span className="mr-2">
                            <UserRound size={20} strokeWidth={1.75} />
                          </span>
                          <p className="mt-2">{item.name}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">
                            <CalendarDays size={20} strokeWidth={1.75} />
                          </span>
                          <p className="text-sm mt-1">{item.date}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mt-4">
                        {item.title}
                      </h3>
                      <Link
                        href={`/news/${item.id}`}
                        aria-label={`Read more about ${item.title}`}
                        className="flex items-center mt-4 transition-all transition-duration-300 hover:text-[#DEC778] font-semibold cursor-pointer"
                      >
                        <p className="mr-2">Read More</p>
                        <span>
                          <MoveUpRight size={18} strokeWidth={1.75} />
                        </span>
                      </Link>
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
