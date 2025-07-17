import Image from "next/image";
import loading from "../../../public/preloader.gif";

export default function Loader() {
    return (
        <div className="flex items-center justify-center h-screen">
        <Image
            src={loading}
            alt="Loading..."
            width={80}
            height={80}
        />
        </div>
    );
}