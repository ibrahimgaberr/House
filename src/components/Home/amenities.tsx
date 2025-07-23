import Image from "next/image";
import { AmenitiesData } from "../../data/data";
import React from "react";
export default function Amenities() {
  return (
    <>
    <section id="amenities">
      <div className="container text-center p-4">
        <h2 className="text-2xl md:text-4xl font-bold py-7">Our Property Amenities</h2>
        <div data-aos="fade-up" className="collection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6 gap-4">
        { AmenitiesData.map((amenity) =>
          <React.Fragment key={amenity.id}>
          <div data-aos="flip-right" className="text-center group">
            {amenity.id % 2 === 0 && <div className="hidden lg:block h-[40px]"></div>}
            <div className="border-2 border-solid border-white relative bg-[#DEC678] inline-block text-center 
            leading-[35px] font-bold p-[3px] w-[40px] h-[40px] rounded-full top-[50px] right-[-60px]  
            group-hover:animate-flip360">{amenity.index}</div>
            <Image
              className="rounded-full object-cover mb-6 mx-auto"
              width={160}
              height={160}
              src={amenity.imgURl}
              alt="New Construction Image"
            />
            <p className="font-bold text-lg lg:text-2xl mb-4">{amenity.title}</p>
            <p className="text-base text-gray-700">{amenity.description}</p>
          </div>
          </React.Fragment>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
