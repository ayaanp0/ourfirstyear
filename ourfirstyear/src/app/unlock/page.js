"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CameraPreview from "../components/CameraPreview";

/* ❤️ Floating Hearts Component */
function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100,
      size: 14 + Math.random() * 20,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      opacity: 0.4 + Math.random() * 0.6,
    }));

    setHearts(generated);
  }, []);

  return (
    <>
      {hearts.map((heart, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          ❤️
        </span>
      ))}
    </>
  );
}

export default function Unlock() {
  const router = useRouter();
  const [scanning, setScanning] = useState(true);

  // 🛑 SILENCE ENFORCER: Kills any music coming from other pages
  useEffect(() => {
    if (typeof window !== "undefined" && window.__memoriesAudio) {
      console.log("Stopping leftover music...");
      window.__memoriesAudio.pause();
      window.__memoriesAudio.currentTime = 0; // Rewind
      window.__memoriesAudio = null; // Clear it
    }
  }, []);

  // Camera scan duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setScanning(false);
    }, 3000); // scan time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-pink-400 flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts */}
      <FloatingHearts />

      {/* Camera */}
      {scanning && (
        <div className="absolute z-20">
          <CameraPreview />
        </div>
      )}

      {/* Login UI */}
      {!scanning && (
        <div className="z-30 bg-white/30 backdrop-blur-xl rounded-3xl px-10 py-8 text-center">
          <h1 className="text-3xl font-serif text-white mb-2">
            That’s a really pretty face…
          </h1>
          <p className="text-white/90 mb-6">Must be Saniya.</p>

          <button
  onClick={() => router.push("/welcome")}
  className="enter-btn"
>
  <span className="enter-text">Enter</span>
  <span className="enter-heart">💖</span>
</button>

        </div>
      )}

      {/* CSS */}
      <style jsx>{`
        .enter-btn {
  position: relative;
  margin-top: 20px;
  padding: 14px 42px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #ffffff, #ffe6f0);
  color: #ff4d88;
  font-size: 16px;
  font-weight: 600;
  font-family: Georgia, serif;
  cursor: pointer;
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.2),
    inset 0 0 0 2px rgba(255, 77, 136, 0.2);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.35s ease;
}

.enter-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.25),
    inset 0 0 0 2px rgba(255, 77, 136, 0.35);
}

.enter-btn:active {
  transform: scale(0.96);
}

.enter-text {
  letter-spacing: 0.5px;
}

.enter-heart {
  font-size: 18px;
  animation: pulse 1.6s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.25);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
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