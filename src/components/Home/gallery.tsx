export default function Gallery() {
  return (
    <>
    <section id="gallery" className="mb-20">
      <div className="relative">
        <div className="gallery h-[80vh] lg:h-[105vh] py-4">
          <div className="content text-white text-center">
            <p className="bg-gray-200/60 text-[#14453D] uppercase text-center text-md lg:text-base inline-block p-2 rounded-3xl w-fit">
              Building Gallery
            </p>
            <h1 className="text-2xl md:text-4xl font-bold mb-0 lg:mb-5 mt-3">Residence Building View</h1>
          </div>
        </div>
        
        <video width="1020" height="640" className=" absolute top-[45%] lg:top-[25%] left-1/2 -translate-x-1/2 z-2 border-[20px] border-white rounded-4xl" autoPlay playsInline  >
          <source src="/real-estate.mp4" type="video/mp4" />
          <track
            src="/real-estate.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
      </video>
      </div>
    </section>
    </>
  );
}
