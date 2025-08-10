'use client';
import { ArrowBigUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAppear(window.scrollY >= 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {appear && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={scrollToTop}
            className="bg-[#14453D] text-white p-2 rounded-full shadow-lg hover:bg-[#042821] transition-colors cursor-pointer"
            aria-label="Go To Top"
          >
            <ArrowBigUp aria-hidden="true" size={40} />
          </button>
        </div>
      )}
    </>
  );
}
