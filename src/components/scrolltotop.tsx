'use client'
import { ArrowBigUp } from "lucide-react";
import { useEffect } from "react";


export default function ScrollToTop() {

    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    }, []);
  return (
    <>
    <div className="fixed bottom-4 right-4 z-5 rounded-full">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-[#14453D] text-white p-2 rounded-full shadow-lg hover:bg-[#042821] transition-colors cursor-pointer"
      >
        <ArrowBigUp size={40} />
      </button>
    </div>
    </>
  );
}