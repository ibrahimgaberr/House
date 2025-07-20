import Image from "next/image";

export default function Gallery() {
  return (
    <>
    <section id="gallery" className="mb-20 md:mb-50 lg:mb-50 xl:mb-0">
      <div className="relative">
        <div className="gallery py-4">
          <div className="content text-white text-center">
            <p className="bg-gray-200/60 text-[#14453D] uppercase text-center text-md lg:text-base inline-block p-2 rounded-3xl w-fit">
              Building Gallery
            </p>
            <h1 className="text-2xl md:text-4xl font-bold mb-5 mt-3">Residence Building View</h1>
          </div>
        </div>
        
        <video width="1020" height="640" className="gallery-main-video" autoPlay playsInline  >
          <source src="/real-estate.mp4" type="video/mp4" />
          <track
            src="/real-estate.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
      </video>

        <div className="lines h-[0] xl:h-[380px] relative">
          <Image
            className="hidden xl:block absolute right-40 bottom-10"
            width={600}
            height={600}
            src="/lines.png"
            alt="Image"
          />
        </div>
      </div>
    </section>
    </>
  );
}
