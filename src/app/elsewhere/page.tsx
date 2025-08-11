import Image from 'next/image';
import MainSection from '@/components/layout/mainSection';

export default function elsewhere() {
    return (
        <>
            <section id="elsewhere">
                <div>
                    <MainSection name="elsewhere Agent" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 items-center justify-items-center">
                    <div className='p-5'>
                        <p className='font-bold text-xl mb-4 leading-7'><span className='font-extrabold'>,elsewhere</span> came to life in
                            2024, and within one year, we maintained to build and stand tall in prime 
                            locations. Kicking off, we exclusively set our sights on Alexandria, the city preserving and 
                            transmitting Hellenic culture to the wider Mediterranean world.</p>
                        <p className='font-bold text-xl mb-4 leading-7'>With its fascinating history and still-preserved ancient buildings, this city allows its visitors
                            and residents alike to experience the past that makes it the charming town it is today.</p>
                        <p className='font-bold text-xl mb-4 leading-7'> with out-and-out pride, we are taking you places. Not just spoken words, it is our vow to set 
                            the path for a peerless quality of life. It is our commitment to offer our clients what 
                            supports thriving and reaching new frontiers. This is the priceless heritage that creates a 
                            head turner.</p>
                    </div>
                    <div>
                        <Image className='rounded-4xl' width={400} height={400} src="/house1.png" alt="elsewhere" />
                    </div>
                </div>
            </section>

            <div className="relative overflow-hidden bg-[url('/gallery1.png')] h-[35vh] bg-cover bg-center after:absolute
            after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50 after:z-1">
                <div className="relative z-2 grid grid-cols-2 md:grid-cols-4 gap-10 p-5 items-center justify-items-center">
                    <Image width={200} height={200} src="/elsewhere/swary.png" alt='swary image'/>
                    <Image width={200} height={200} src="/elsewhere/mazarine.png" alt='mazarine image'/>
                    <Image width={200} height={200} src="/elsewhere/alex-west.png" alt='alex west image'/>
                    <Image width={200} height={200} src="/elsewhere/cecilia.png" alt='cecilia image'/>
                </div>
            </div>

            <div className='p-5'>
                <h2 className='font-bold text-[#14453D] text-2xl'>Projects</h2>
                <p className='text-gray-500 mt-3'>With the experience, vision and passion, we bring the 
                    avant-garde real estate development to the Egyptian market.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-items-center mt-10">
                    <div className='relative'>
                        <Image width={400} height={700} src="/elsewhere/01-Cam08-building-balcony.webp" alt='Ajaza, New Alamein image'/>
                        <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#14453D]
                        text-lg font-bold bg-gray-200 p-3 rounded-3xl whitespace-nowrap'>Ajaza, New Alamein</p>
                    </div>
                    <div className='relative'>
                        <Image width={400} height={700} src="/elsewhere/02-Cam-12-Kids-Area.webp" alt='The One, Alexandria image'/>
                        <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#14453D]
                        text-lg font-bold bg-gray-200 p-3 rounded-3xl whitespace-nowrap'>The One, Alexandria</p>
                    </div>
                    <div className='relative'>
                        <Image width={400} height={700} src="/elsewhere/01-Cam04-bedroom.webp" alt='Cecilia, Alex. West image'/>
                        <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#14453D] 
                        text-lg font-bold bg-gray-200 p-3 rounded-3xl whitespace-nowrap'>Cecilia, Alex. West</p>
                    </div>
                </div>  
            </div>
        </>
    );
}