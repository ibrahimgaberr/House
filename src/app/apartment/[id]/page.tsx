import {
  typeARoom1, typeARoom2, typeARoom3,
  typeBRoom1, typeBRoom2, typeBRoom3,
  typeCRoom2, typeCRoom3, typeCRoom4,
  typeDRoom2, typeDRoom3, typeDRoom4
} from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath } from "lucide-react";
import { use } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const allRooms = [
  ...typeARoom1,
  ...typeARoom2,
  ...typeARoom3,
  ...typeBRoom1,
  ...typeBRoom2,
  ...typeBRoom3,
  ...typeCRoom2,
  ...typeCRoom3,
  ...typeCRoom4,
  ...typeDRoom2,
  ...typeDRoom3,
  ...typeDRoom4
];

export default function ApartmentDetails({ params }: PageProps) {
  const { id } = use(params);
  const apartment = allRooms.find(room => room.id === +id);

  if (!apartment) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Apartment not found</h2>
        <Link href="/" className="text-blue-600 underline mt-4 inline-block">Back to home</Link>
      </div>
    );
  }

return (
  <div className=" py-25 px-4 max-w-full sm:max-w-5xl mx-auto mt-10">
    <h1 className="text-4xl font-extrabold mb-6 text-[#14453D]">
      Apartment #{apartment.id}
    </h1>

    <p className="text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
      {apartment.description}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 justify-center">
      {apartment.images.imgURL.map((url, idx) => (
        <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-md group">
          <Image
            src={url}
            alt={`Apartment Image ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 group-hover:scale-105 rounded-4xl"
            priority={idx === 0} 
          />
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-10 justify-center mb-10">
      <div className="flex items-center gap-3 text-gray-700 text-lg font-semibold">
        <BedDouble size={28} className="text-green-600" />
        <span>{apartment.bedrooms} Bedroom{apartment.bedrooms > 1 ? "s" : ""}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-700 text-lg font-semibold">
        <Bath size={28} className="text-blue-600" />
        <span>{apartment.bathrooms} Bathroom{apartment.bathrooms > 1 ? "s" : ""}</span>
      </div>
    </div>

    <section>
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
        Room Details
      </h2>
      <ul className="space-y-4 text-gray-700">
        {apartment.rooms.map((room, idx) => (
          <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl mb-1">{room.name}</h3>
            <p className="text-gray-600 leading-relaxed">{room.description}</p>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
}
