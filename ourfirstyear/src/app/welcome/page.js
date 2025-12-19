"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  const [hearts, setHearts] = useState([]);

  // ❤️ Floating hearts animation
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

  // 🔇 STOP any leftover memories music when Welcome loads
  useEffect(() => {
    if (typeof window !== "undefined" && window.__memoriesAudio) {
      window.__memoriesAudio.pause();
      window.__memoriesAudio.currentTime = 0;
      window.__memoriesAudio = null;
    }
  }, []);

  // ➡️ Go to memories (music starts THERE, not here)
  const goToMemories = () => {
    router.push("/memories");
  };

  return (
    <div className="relative fullscreen bg-pink-400 overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="heart"
            style={{
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              animationDuration: `${h.duration}s`,
            }}
          >
            💗
          </span>
        ))}
      </div>

      {/* Centered content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">
          Welcome, my love 🤍
        </h1>

        <div className="flex gap-8 justify-center mt-4">
          {/* Letter */}
          <a
            href="/letter"
            className="btn-love group"
            aria-label="Read the letter"
          >
            <span className="btn-content">
              <span className="icon icon-default">💌</span>
              <span className="icon icon-hover">❤️</span>
              <span className="label">Read the Letter</span>
            </span>
            <span className="shimmer"></span>
          </a>

          {/* Memories */}
          <button
            onClick={goToMemories}
            className="btn-love group"
            aria-label="Relive memories"
          >
            <span className="btn-content">
              <span className="icon icon-default">📸</span>
              <span className="icon icon-hover">💞</span>
              <span className="label">Relive Memories</span>
            </span>
            <span className="shimmer"></span>
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .heart {
          position: absolute;
          bottom: -20px;
          animation: floatUp linear infinite;
          pointer-events: none;
        }

        @keyframes floatUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-110vh);
          }
        }
      `}</style>
    </div>
  );
}
