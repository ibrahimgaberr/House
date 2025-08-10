"use client";
import { use } from "react";
import MainSection from "@/components/layout/mainSection";
import { newsData } from "@/data/data";
import Image from "next/image";
import { UserRound, CalendarDays, MoveUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SendMessage from "@/components/sendMessageForm/sendMessageForm";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function NewsDetails({ params }: PageProps) {
  const { id } = use(params);
  const newsItem = newsData.find((item) => item.id === parseInt(id));
  const latestNews = newsData.slice(0, 3);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <MainSection name="News" showDetails="News Details" />
      <div className="w-full xl:w-[70%] mx-auto">
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
          <div className="w-full xl:w-[60%] text-center">
            <h3 className="text-2xl font-semibold mt-4 mb-4 text-center">
              {newsItem?.title}
            </h3>
            <p className="mb-6 text-gray-600 leading-7">
              {newsItem?.paragraph1}
            </p>
            <p className="text-gray-600 leading-7">
{newsItem?.paragraph2}
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
          <div className="w-full xl:w-[60%] text-center">
            <h3 className="text-2xl font-semibold mt-4 mb-4 text-center">
              {newsItem?.subTitle}
            </h3>
            <p className="text-gray-600 leading-7">
              {newsItem?.subTitleParagraph}
            </p>
          </div>
        </div>
        {/* send message form */}
        <SendMessage />
      </div>

      <div className="bg-[#F1F4F3] p-3 flex flex-col justify-center items-center mt-10">
        <h2 className="text-lg md:text-4xl font-bold mb-10">Related News</h2>
        <div className="flex flex-col md:flex-row gap-5 mb-10 w-[100%] justify-center items-center">
          {latestNews.map((news) => (

            <div
              key={news.id}
              className="relative rounded-2xl shadow-md hover:shadow-none w-[80%] lg:w-[33%] mb-10"
            >
              {/* Image with overlay container */}

              <Image
                className="rounded-2xl w-full"
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
                    <p>{news.name}</p>
                  </div>
                  <div className="hidden lg:flex items-center">
                    <span className="mr-2">
                      <CalendarDays size={20} strokeWidth={1.75} />
                    </span>
                    <p className="text-sm">{news.date}</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mt-4">{news.title}</h3>
                <Link
                            href={`/news/${news.id}`}
                            aria-label={`Read more about ${news.title}`}
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
      </div>
    </>
  );
}
