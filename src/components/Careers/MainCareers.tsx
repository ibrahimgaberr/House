import { careersData } from "@/data/data";
import MainSection from "../layout/mainSection";
import Link from "next/link";

export default function MainCareers() {

  return (
    <>
      <MainSection name="Careers" />
      <div className="avilable-career">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
          {careersData.map((career) => (
            <div key={career.id} className="bg-gradient-to-r from-[#e6f4f1] to-white shadow-lg p-6 rounded-4xl border-l-8 border-[#14453D] transition hover:scale-[1.02] hover:shadow-xl">
              <h2 className="mb-2 text-[#14453D] font-bold text-2xl">
                {career.title}
              </h2>
              <p className="text-sm">{career.subDescription}</p>
              <div className="text-right">
                <Link href={`/jobDetails?jobId=${career.id}`}>
                  <button 
                  className="p-[10px] text-md group rounded-3xl text-white bg-[#14453D] border-0 cursor-pointer">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
