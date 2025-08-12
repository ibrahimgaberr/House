"use client";
import { careersData } from "@/data/data";
import FormJobApply from "@/components/Careers/FormJobApply";
import { useSearchParams } from "next/navigation";
import MainSection from "@/components/layout/mainSection";

export default function JobDetails() {
  const jobId = useSearchParams().get("jobId");
  const job = careersData.find((career) => +career.id === +jobId!);

  return (
    <>
      <MainSection name="Job Details" />
      <div className="mt-15 w-full p-8 rounded-3xl lg:w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-[#14453D] mb-4">{job?.title}</h1>

        <p className="text-gray-700 leading-relaxed mb-6">{job?.description}</p>

        <h2 className="text-lg font-semibold text-[#14453D] mb-3">
          Requirements
        </h2>
        <ul className="space-y-2 list-disc list-inside text-gray-600">
          {job?.requirements?.map((requirement, index) => (
            <li key={index} className="leading-snug">
              {requirement}
            </li>
          ))}
        </ul>
      </div>

        <FormJobApply />
    </>
  );
}
