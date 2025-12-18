"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: 12 + Math.random() * 20,
          duration: 6 + Math.random() * 4,
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

   return (
    <div className="relative fullscreen bg-pink-400 overflow-hidden">

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
       <span className="heart delay-0" style={{ left: "10%" }}>💗</span>
      <span className="heart delay-1" style={{ left: "25%" }}>💖</span>
      <span className="heart delay-2" style={{ left: "40%" }}>💞</span>
      <span className="heart delay-3" style={{ left: "60%" }}>💓</span>
      <span className="heart delay-4" style={{ left: "80%" }}>💕</span>

      </div>

      {/* Centered content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">
          Welcome, my love 🤍
        </h1>

        <div className="flex gap-6 justify-center">
          <a
            href="/letter"
            className="px-8 py-3 bg-white text-pink-500 rounded-full font-semibold text-lg hover:scale-105 transition"
          >
            Read the Letter 💌
          </a>

          <a
            href="/memories"
            className="px-8 py-3 bg-white text-pink-500 rounded-full font-semibold text-lg hover:scale-105 transition"
          >
            Relive Memories 📸
          </a>
        </div>
      </div>

    </div>
  );
}