import { MoveUpRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import EnquiryForm from "./form";


export default function MainSection() {
  return (
    <>
      <section id="home" className="main relative">
        {/* hero section */}
        <div className="container pt-[9.77rem] lg:pt-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col lg:flex-row justify-center md:justify-around items-center w-full gap-6">
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h5 className="bg-gray-200/60 p-1 rounded-2xl inline-block">
                <MapPin className="inline mr-1" />
                538 Joanie Fort Apt. 933 Louisiana
              </h5>
              <h1 className="py-5 text-4xl font-extrabold md:text-4xl text-anime-style-2">
                Welcome to Your <br /> Luxurious Haven
              </h1>
              <Button
                className="btn font-bold text-lg group rounded-4xl text-white bg-sky-700 border-0 cursor-pointer"
                variant="outline"
              >
                Schedule A Visit{" "}
                <MoveUpRight
                  size={32}
                  strokeWidth={2.75}
                  className="ml-2 transition-transform duration-300 group-hover:rotate-45"
                />
              </Button>
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
