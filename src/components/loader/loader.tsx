import Image from "next/image";
import loading from "../../../public/preloader.gif";

export default function Loader() {
    return (
        <div className="flex items-center justify-center h-[100vh] w-full bg-white relative z-5">
        <Image
            src={loading}
            alt="Loading..."
            width={60}
            height={60}
        />
        </div>
    );
}