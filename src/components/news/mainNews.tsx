import { newsData } from "@/data/data";
import MainSection from "../layout/mainSection";
import Image from "next/image";
import Link from "next/link";
import { UserRound, CalendarDays, MoveUpRight } from "lucide-react";

export default function MainNews() {
  console.log(newsData)


  return (
    <>
      {/* Main section */}
      <MainSection name="News" />
      {/* Main section */}
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-15 p-5 md:p-15 lg:p-25 mb-7">
          {newsData.map((item) => (
         <Link key={item.id} href={`/news/${item.id}`}>            
                        <div
                        
                        className="relative rounded-2xl shadow-md hover:shadow-none"
                      >
                        {/* Image with overlay container */}

                        <Image
                          className="rounded-2xl w-full h-64 md:h-auto object-cover"
                          width={400}
                          height={400}
                          src={item.images.imgURL}
                          alt="Image"
                        />

                        {/* Content div */}
                        <div className="absolute rounded-2xl bg-white p-4 -bottom-10 w-[80%] left-[50%] transform -translate-x-1/2 rounded-b-2xl">
                          <div className="flex align-middle items-center space-x-3">
                            <div className="flex items-center">
                              <span className="mr-2">
                                <UserRound size={20} strokeWidth={1.75} />
                              </span>
                              <p>{item.name}</p>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">
                                <CalendarDays size={20} strokeWidth={1.75} />
                              </span>
                              <p className="text-sm">{item.date}</p>
                            </div>
                          </div>
                          <h3 className="text-lg font-medium mt-4">
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
                  </Link>
          ))}
      </div>
    </>
  );
}
