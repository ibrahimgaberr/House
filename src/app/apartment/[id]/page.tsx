"use client";
import { use } from "react";
import MainSection from "@/components/layout/mainSection";
import { apartmentData } from "@/data/data";
import Image from "next/image";
import {
  DoorClosedLocked,
  Bath,
  BedDouble,
  Fingerprint,
  UtensilsCrossed,
  Sofa,
  Wifi,
  Sun,
} from "lucide-react";
import SendMessage from "@/components/sendMessageForm/sendMessageForm";
import Loader from "@/components/loader/loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ApartmentDetails({ params }: PageProps) {
  const { id } = use(params);
  const [loading, setIsLoading] = useState(true);
  const apartmentDetails = apartmentData.find(
    (item) => item.id === parseInt(id)
  );
  const latestNews = apartmentData.slice(0, 3);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainSection name="Apartment" showDetails="Apartment Details" />
          <div className="w-full md:w-[70%] mx-auto">
            <div className="p-3 md:p-10 flex flex-col items-center justify-center">
              <Image
                className="rounded-2xl mb-2"
                width={500}
                height={400}
                src={apartmentDetails!.images.imgURL[0]}
                alt="Image"
              />
              <div className="flex justify-start items-center my-5">
                <h1 className="font-bold text-2xl my-2">
                  {apartmentDetails?.name}
                </h1>
              </div>
              <div className="w-full md:w-[60%] text-center">
                <p className="mb-6 text-gray-600 leading-7">
                  Nestled in the heart of the city, Diamond Apartments offer a
                  perfect blend of luxury and convenience. These elegantly
                  designed residence boast spacious layouts, modern amenities,
                  and stunning city views, providing a sanctuary.
                </p>
                <p className="text-gray-600 leading-7">
                  Nestled in the heart of the city, Diamond Apartments offer a
                  perfect blend of luxury and convenience. These elegantly
                  designed residence boast spacious layouts, modern amenities,
                  and stunning city views, providing a sanctuary.
                </p>
              </div>
              <div className="w-full md:w-[60%] text-center my-4">
                <h2 className="font-bold text-2xl my-2">
                  Diamond Apartment Property Amenities
                </h2>
                <p className="mb-6 text-gray-600 leading-7">
                  Nestled in the heart of the city, Diamond Apartments offer a
                  perfect blend of luxury and convenience. These elegantly
                  designed residence boast spacious layouts, modern amenities,
                  and stunning city views, providing a sanctuary.
                </p>
              </div>

              <div className="flex justify-center items-center py-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* First pair */}
                  <div className="flex items-center bg-[#F1F4F3] p-5 rounded-2xl">
                    <DoorClosedLocked className="mr-3" />
                    <p>Lock On Bedroom</p>
                  </div>
                  <div className="flex items-center bg-[#F1F4F3] p-5 rounded-2xl">
                    <Fingerprint className="mr-3" />
                    <p>Private Entrance</p>
                  </div>

                  {/* Second pair */}
                  <div className="flex items-center bg-[#F1F4F3] p-5 rounded-2xl">
                    <UtensilsCrossed className="mr-3" />
                    <p>Outdoor Dining Area</p>
                  </div>
                  <div className="flex items-center bg-[#F1F4F3] p-5 rounded-2xl">
                    <Sofa className="mr-3" />
                    <p>Patio Or Balcony</p>
                  </div>

                  {/* Third pair */}
                  <div className="flex items-center bg-[#F1F4F3] p-5 rounded-2xl">
                    <Wifi className="mr-3" />
                    <p>Building Wifi Free</p>
                  </div>
                  <div className="flex items-center bg-[#F1F4F3] p-5 rounded-2xl">
                    <Sun className="mr-3" />
                    <p>Sun Loungers</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[60%] text-center my-4">
                <h2 className="font-bold text-2xl my-2">
                  360° Video Visual Tour Of Diamond Apartment
                </h2>
                <p className="mb-6 text-gray-600 leading-7">
                  Apartments provide range of exceptional amenities designed to
                  enhance the quality of life for its residents. Here’s a we
                  have list of the amenities offered:
                </p>
              </div>
              <div className="flex flex-col md:flex-row mt-5 gap-4">
                <Image
                  className="rounded-2xl mb-2"
                  width={300}
                  height={300}
                  src={apartmentDetails!.images.imgURL[0]}
                  alt="Image"
                />
                <Image
                  className="rounded-2xl mb-2"
                  width={300}
                  height={300}
                  src={apartmentDetails!.images.imgURL[1]}
                  alt="Image"
                />
              </div>
              {/* Send Message Form */}
              <SendMessage />
            </div>
          </div>
          <div className="bg-[#F1F4F3] p-10 flex flex-col justify-center items-center mt-10">
            <p className="bg-gray-200/60 text-[#14453D] mb-2 uppercase text-center text-md lg:text-2xl inline-block p-2 rounded-3xl w-fit">
              Apartment
            </p>
            <h2 className="text-lg md:text-4xl font-bold mb-10">
              Our Latest Property
            </h2>
            <div className="flex flex-col md:flex-row gap-5 mb-10 w-[100%] justify-center items-center">
              {latestNews.map((news) => (
                <div
                  key={news.id}
                  className="rounded-2xl shadow-md hover:shadow-none group w-[80%] lg:w-[33%] mb-10"
                >
                  {/* Image with overlay container */}

                  <Image
                    className="rounded-t-2xl w-full transition-all transition-duration-300 group-hover:rotate-1"
                    width={600}
                    height={600}
                    src={news!.images.imgURL[0]}
                    alt="Image"
                  />

                  {/* Content div */}
                  <div className="bg-white p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <p className="mt-2 text-lg">{news.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-5">
                      <span>
                        <BedDouble
                          size={20}
                          strokeWidth={1.75}
                          className="inline-block"
                        />{" "}
                        x{news.details.beds}
                      </span>
                      <span>
                        <Bath
                          size={20}
                          strokeWidth={1.75}
                          className="inline-block"
                        />{" "}
                        x{news.details.baths}
                      </span>
                      <span>{news.details.area}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
