'use client';

import { useEffect, useState } from "react";

export default function NotFound() {
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
      }, 200); // Speed of typing
    };

    loopAnimation();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-[#14453D] mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-700 mb-2">Oops! This page doesn&apos;t exist.</p>
      <p className="text-lg text-gray-600">
        Try looking{" "}
        <span className="font-mono text-[#14453D] border-r-2 border-[#14453D] pr-1 animate-pulse">
          ,{text}
        </span>
        ...
      </p>
    </div>
  );
}
