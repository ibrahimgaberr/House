import { CheckCheck } from "lucide-react";
import EnquiryForm from "./form";

export default function MainHomeSection() {
  return (
    <>
      <section id="home" className="main h-[135vh] lg:h-[100vh] relative">
        {/* hero section */}
        <div className="container pt-[2rem] lg:pt-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col lg:flex-row justify-center md:justify-around items-center w-full gap-6">
            <div className="w-full md:w-2/3 text-left space-y-7 md:space-y-15">
              <h1 className="text-base md:text-5xl text-white font-bold leading-16 whitespace-nowrap">
                All Year Long <span className="underline">Ajaza</span>
              </h1>
              <div>
                <ul className="font-bold">
                  <li className="mb-2 text-white text-base md:text-lg">
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <CheckCheck className="flex-shrink-0" size={20} />Distinguished by its strategic location near the main road axes.
                    </div>
                  </li>
                  <li className="mb-2 text-white text-base md:text-lg">
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <CheckCheck className="flex-shrink-0" size={20} />It is divided into 5 areas, each featuring its own green spaces.
                    </div>
                  </li>
                  <li className="mb-2 text-white text-base md:text-lg">
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <CheckCheck className="flex-shrink-0" size={20} />Swimming pools & lagoons.
                    </div>
                  </li>
                  <li className="text-white text-base md:text-lg">
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <CheckCheck className="flex-shrink-0" size={20} />Privacy & Security.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}