import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-[100vh] w-full bg-white relative z-5">
            <Image
                src="/preloader.gif"
                alt="Loading..."
                width={60}
                height={60}
            />
        </div>
    );
}