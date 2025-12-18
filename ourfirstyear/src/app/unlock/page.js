"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map(() => ({
      left: Math.random() * 100,
      size: 12 + Math.random() * 18,
      opacity: 0.2 + Math.random() * 0.4,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 10,
    }));
    setHearts(generated);
  }, []);

  return (
    <>
      {hearts.map((h, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${h.left}%`,
            bottom: "-10%",
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `floatUp ${h.duration}s linear infinite`,
            animationDelay: `${h.delay}s`,
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
            pointerEvents: "none",
          }}
        >
          ❤️
        </span>
      ))}
    </>
  );
}


export default function Unlock() {
  const [showText, setShowText] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ 
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #111 0%, #000 70%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Playfair Display', serif",
        textAlign: "center",
        overflow: "hidden",
        className:"min-h-screen flex items-center justify-center bg-black text-white"
      }}
    >
      <FloatingHearts />
      {showText && (
        <div style={{ animation: "fadeIn 2s ease forwards" }}>
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "12px",
              animation: "heartbeat 3s ease-in-out infinite",
            }}
          >
            That’s a really pretty face…
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.8,
              marginBottom: "40px",
            }}
          >
            Must be Saniya.
          </p>

          <button
            onClick={() => router.push("/welcome")}
             className="px-8 py-3 rounded-full bg-white text-black text-lg"
            style={{
              padding: "12px 36px",
              borderRadius: "999px",
              border: "none",
              background: "white",
              color: "black",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Enter
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.15);
          }
          50% {
            text-shadow: 0 0 25px rgba(255, 255, 255, 0.35);
          }
        }
      `}</style>
    </div>
  );
}
