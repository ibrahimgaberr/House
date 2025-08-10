'use client'
import { careersData } from "@/data/data";
import MainSection from "../layout/mainSection";
import ApplyForm from "./ApplyForm";
import { useRef, useState } from "react";

export default function MainCareers() {
    const formRef = useRef<HTMLDivElement>(null);
    const [openForm, setOpenForm] = useState(false)
    function apply() {
        setOpenForm(true);
        
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <>
      <MainSection name="Careers" />
      <div className="avilable-career">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
          {careersData.map((career) => (
            <div key={career.id} className="bg-gray-200/60 p-5 rounded-2xl">
              <h2 className="mb-2 text-[#14453D] font-bold text-2xl">
                {career.title}
              </h2>
              <p className="text-sm">{career.description}</p>
              <div className="text-right">
                <button 
                onClick={apply}
                className="p-[10px] text-md group rounded-3xl text-white bg-[#14453D] border-0 cursor-pointer">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div ref={formRef} className="p-5">
            <ApplyForm appearTheForm = {openForm} setAppearForm = {setOpenForm}/>
        </div>
      </div>
    </>
  );
}
