
import { Button } from "@/components/ui/button";
import Link from "next/link";


type OurButtnonProps = {
  name: string;
  pathLink: string
}
export default function OurButton(props: OurButtnonProps) {
  const { name, pathLink} = props
  return (
    <>
      <div className=" flex justify-center lg:justify-start">
        <Button
          className="relative z-1 rounded-4xl bg-gray-200 leading-3.5
               text-black text-lg border-0 py-6 my-2 cursor-pointer hover:text-white
              after:content-[''] after:absolute after:h-10 after:w-10 after:inline-block after:rounded-full after:transition-all 
              after:duration-400 after:bg-[#446A64] after:left-[5px] after:top-[4px] after:-z-10 
              hover:after:w-[94%] hover:after:rounded-[80px]
              "
        >
          <Link href={pathLink}>{name}</Link>
        </Button>
      </div>
    </>
  );
}
