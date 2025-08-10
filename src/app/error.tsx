'use client';

import { useEffect, useState } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
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
          setTimeout(loopAnimation, 1500); // Wait before repeating
        } else {
          setText(baseText + fullText.slice(baseText.length, baseText.length + index));
        }
      }, 200); // Typing speed
    };

    loopAnimation();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">500 - Something Went Wrong</h1>
      <p className="text-xl text-gray-700 mb-2">{error.message || "Unexpected error occurred."}</p>
      <p className="text-lg text-gray-600 mb-6">
        Try looking{" "}
        <span className="font-mono text-red-600 border-r-2 border-red-600 pr-1 animate-pulse">
          ,{text}
        </span>
        ...
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2 bg-[#14453D] text-white rounded hover:bg-[#0e2f28] transition"
      >
        Try Again
      </button>
    </div>
  );
}
