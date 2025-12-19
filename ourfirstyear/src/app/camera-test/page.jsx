"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/* Floating hearts across entire screen */
function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100,
      size: 14 + Math.random() * 22,
      opacity: 0.3 + Math.random() * 0.4,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 10,
    }));
    setHearts(generated);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
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
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default function Unlock() {
  const router = useRouter();
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [showText, setShowText] = useState(false);
  const [scanning, setScanning] = useState(true);

  /* CAMERA — always mounts */
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setTimeout(() => setScanning(false), 2500);
      })
      .catch((err) => {
        console.error("Camera error:", err);
      });

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  /* Text delay */
  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        background: "#ff7eb3",
        fontFamily: "'Playfair Display', serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <FloatingHearts />

      {/* CAMERA BOX */}
      <div
  style={{
    position: "fixed",          // 🔥 IMPORTANT
    top: "24px",
    right: "24px",
    width: "200px",             // 👈 smaller
    height: "260px",
    borderRadius: "18px",
    overflow: "hidden",
    background: "black",
    boxShadow: "0 0 30px rgba(255,255,255,0.5)",
    zIndex: 5,                  // 👈 above text
  }}
>
  <video
    ref={videoRef}
    autoPlay
    muted
    playsInline
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "scaleX(-1)",
    }}
  />

  {/* Scan line */}
  {scanning && (
    <>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, white, transparent)",
          animation: "scan 2.5s linear infinite",
        }}
      />
      <div
  style={{
    zIndex: 3,
    textAlign: "center",
    color: "white",
    pointerEvents: "auto",
  }}
>

        Scanning…
      </div>
    </>
  )}
</div>

      {/* TEXT */}
      {showText && (
        <div style={{ zIndex: 2, textAlign: "center", color: "white" }}>
          <h1 style={{ fontSize: "44px", marginBottom: "12px" }}>
            That’s a really pretty face…
          </h1>
          <p style={{ opacity: 0.9, marginBottom: "36px" }}>
            Must be Saniya.
          </p>
          <button
            onClick={() => router.push("/welcome")}
            style={{
              padding: "14px 40px",
              borderRadius: "999px",
              border: "none",
              background: "white",
              color: "#ff4f9a",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Enter
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes floatUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-120vh);
          }
        }

        @keyframes scan {
          from {
            top: 0%;
          }
          to {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
}
