'use client'
import { use } from "react";
import MainSection from "@/components/layout/mainSection";
import { newsData } from "@/data/data";
import Image from "next/image";
import { UserRound, CalendarDays, MoveUpRight } from "lucide-react";
import Loader from '@/components/loader/loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import SendMessage from "@/components/sendMessageForm/sendMessageForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function NewsDetails({ params }: PageProps) {
  const [loading, setIsLoading] = useState(true);
  const { id } = use(params);
  const newsItem = newsData.find((item) => item.id === parseInt(id));
  const latestNews = newsData.slice(0,3);
       useEffect(() => {
         AOS.init();
         const timer = setTimeout(() => {
           setIsLoading(false);
         }, 1000); 
     
         return () => clearTimeout(timer); 
       }, []);
  return (
    <>
    {
      loading ? <Loader/> : <>
            <MainSection name="News" showDetails="News Details"/>
      <div className="w-full md:w-[70%] mx-auto">
          <div className="p-3 md:p-10 flex flex-col items-center justify-center">
            <Image
              className="rounded-2xl mb-2"
              width={500}
              height={400}
              src={newsItem!.images.imgURL}
              alt="Image"
            />
            <div className="flex justify-start items-center mt-5">
              <div className="flex items-center mr-4">
                <span className="mr-2">
                  <UserRound size={20} strokeWidth={1.75} />
                </span>
                <p>{newsItem?.name}</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2">
                  <CalendarDays size={20} strokeWidth={1.75} />
                </span>
                <p className="text-sm">{newsItem?.date}</p>
              </div>
            </div>
            <div className="w-full md:w-[60%] text-center">
              <h3 className="text-2xl font-semibold mt-4 mb-4 text-center">
                {newsItem?.title}
              </h3>
              <p className="mb-6 text-gray-600 leading-7">
                Nestled in the heart of the city, Diamond Apartments offer a
                perfect blend of luxury and convenience. These elegantly designed
                residence boast spacious layouts, modern amenities, and stunning
                city views, providing a sanctuary.
              </p>
              <p className="text-gray-600 leading-7">
                Nestled in the heart of the city, Diamond Apartments offer a
                perfect blend of luxury and convenience. These elegantly designed
                residence boast spacious layouts, modern amenities, and stunning
                city views, providing a sanctuary.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-5 gap-4">
              <Image
                className="rounded-2xl mb-2"
                width={300}
                height={300}
                src={newsItem!.images.imgURL}
                alt="Image"
              />
              <Image
                className="rounded-2xl mb-2"
                width={300}
                height={300}
                src={newsItem!.images.imgURL}
                alt="Image"
              />
            </div>
            <div className="w-full md:w-[60%] text-center">
              <h3 className="text-2xl font-semibold mt-4 mb-4 text-center">
                Unparalleled Elegance: Discover Luxury Villa
              </h3>
              <p className="mb-6 text-gray-600 leading-7">
                Escape to luxury Serenity Heights, a prestigious hilltop offering
                panoramic views of the Pacific Ocean. This contemporary
                masterpiece features 5 bed rooms, 6 bathrooms, an expansive
                infinity pool that blends seamlessly.
              </p>
            </div>
          </div>
      {/* send message form */}
      <SendMessage/>
      </div>
      
      <div className="bg-[#F1F4F3] p-10 flex flex-col justify-center items-center mt-10">
        <p className="bg-gray-200/60 text-[#14453D] mb-2 uppercase text-center text-md lg:text-2xl inline-block p-2 rounded-3xl w-fit">Our News</p>
        <h2 className="text-lg md:text-4xl font-bold mb-10">Our Latest Blog</h2>            
        <div className="flex flex-col md:flex-row gap-5 mb-10 w-[100%] justify-center items-center">
        {latestNews.map((news) => (  <div
                            key={news.id}
                            className="relative rounded-2xl shadow-md hover:shadow-none group w-[80%] lg:w-[33%] mb-10"
                          >
                            {/* Image with overlay container */}

                            <Image
                              className="rounded-2xl w-full transition-all transition-duration-300 group-hover:rotate-1"
                              width={600}
                              height={600}
                              src={news!.images.imgURL}
                              alt="Image"
                            />

                            {/* Content div */}
                            <div className="absolute rounded-2xl bg-white p-4 -bottom-10 w-[80%] left-[50%] transform -translate-x-1/2 rounded-b-2xl">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center">
                                  <span className="mr-2">
                                    <UserRound size={20} strokeWidth={1.75} />
                                  </span>
                                  <p className="mt-2">{news.name}</p>
                                </div>
                                <div className="flex items-center">
                                  <span className="mr-2">
                                    <CalendarDays size={20} strokeWidth={1.75} />
                                  </span>
                                  <p className="text-sm mt-1">{news.date}</p>
                                </div>
                              </div>
                              <h3 className="text-xl font-semibold mt-4">
                                {news.title}
                              </h3>
                              <p
                                className="flex items-center mt-4 transition-all transition-duration-300 hover:text-[#DEC778] font-semibold cursor-pointer"
                              >
                                Read More
                                <span className="ml-2">
                                  <MoveUpRight size={18} strokeWidth={1.75} />
                                </span>
                              </p>
                            </div>
        </div>))}
        </div>
      </div> 
      </>
    }

    </>
  );
}