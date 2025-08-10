import Image from "next/image";
import { servciesData } from "../../data/data";
import React from "react";
export default function Services() {
  return (
    <>
    <section id="services">
      <div className="container text-center p-4">
        <h2 className="text-2xl md:text-4xl font-bold py-7">Our Property Amenities</h2>
        <div data-aos="fade-up" className="collection grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-4">
        { servciesData.map((amenity) =>
          <React.Fragment key={amenity.id}>
          <div data-aos="flip-right" className="text-center group">
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
