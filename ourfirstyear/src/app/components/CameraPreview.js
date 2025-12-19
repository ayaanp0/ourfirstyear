"use client";

import { useEffect, useRef } from "react";

export default function CameraPreview() {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;

    async function startCamera() {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  return (
    <div className="w-[260px] h-[420px] rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
