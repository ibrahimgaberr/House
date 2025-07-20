import Image from "next/image";

export default function Gallery() {
  return (
    <>
    <section id="gallery" className="mb-20 md:mb-50 lg:mb-50 xl:mb-0">
      <div className="relative">
        <div className="gallery py-4">
          <div className="content text-white text-center">
            <h5 className="bg-gray-100/20 p-2 rounded-4xl inline-block uppercase mb-2">
              Building Gallery
            </h5>
            <h1 className="text-4xl font-bold mb-5 lg:text-[56px] lg:font-bold mt-3">Residence Building View</h1>
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
