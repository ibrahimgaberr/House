// import Image from "next/image";

// export default function Loading() {
//     return (
//         <div className="flex items-center justify-center h-[100vh] w-full bg-white relative z-4">
//             <Image
//                 src="/preloader.gif"
//                 alt="Loading..."
//                 width={60}
//                 height={60}
//             />
//         </div>
//     );
// }

'use client';

import { useEffect, useState } from "react";

export default function Loading() {
  const [text, setText] = useState("Elsewhere");
  const fullText = "Elsewhere";
  const baseText = "Else";

  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;

    const loopAnimation = () => {
      setText(baseText); // Reset to "Else"
      index = 0;

      interval = setInterval(() => {
        index++;
        if (index > 5) {
          clearInterval(interval);
          setTimeout(loopAnimation, 1000);
        } else {
          setText(baseText + fullText.slice(baseText.length, baseText.length + index));
        }
      }, 200);
    };

    loopAnimation();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-4">
      <h1 className="text-7xl font-extrabold italic text-[#14453D] mb-4">,{text}...</h1>
    </div>
  );
}
