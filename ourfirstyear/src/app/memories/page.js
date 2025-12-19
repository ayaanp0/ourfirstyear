"use client";

import { useEffect, useRef, useState } from "react";

const memories = [
  {
    src: "/m1.jpg",
    text: "Ill always cherish your presence everyday, no matter how old we become 💗",
  },
  {
    src: "/m2.jpg",
    text: "It'll always be like this, i'll always protect you, and be your Peace! ✨",
  },
  {
    src: "/m3.jpg",
    text: "We look better together, and i glow a little different when im with you! 🌸",
  },
  {
    src: "/m4.jpg",
    text: "You will always be my adventure partner, my best friend, my everything 💗",
  },
];

export default function Memories() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const [opened, setOpened] = useState(Array(memories.length).fill(false));
  const [flipped, setFlipped] = useState(Array(memories.length).fill(false));

  // 🎵 MUSIC: START ON ENTER, STOP ON EXIT
  useEffect(() => {
    const audio = new Audio("/our-song.mp3");
    audio.loop = true;
    audio.volume = 0.4;

    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false)); // autoplay safety

    audioRef.current = audio;

    // 🔥 STOP COMPLETELY WHEN LEAVING PAGE
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const openEnvelope = (i) => {
    const copy = [...opened];
    copy[i] = true;
    setOpened(copy);
  };

  const flipPhoto = (i) => {
    const copy = [...flipped];
    copy[i] = !copy[i];
    setFlipped(copy);
  };

  return (
    <div className="page">
      <h1>Relive Our Memories 💌</h1>

      <button className="music-btn" onClick={toggleMusic}>
        {playing ? "⏸ Pause music" : "▶️ Play music"}
      </button>

      <div className="grid">
        {memories.map((m, i) => (
          <div key={i} className="slot">
            {!opened[i] && (
              <div className="envelope" onClick={() => openEnvelope(i)}>
                ✉️
                <span>Open me</span>
              </div>
            )}

            {opened[i] && (
              <div
                className={`polaroid ${flipped[i] ? "flip" : ""}`}
                onClick={() => flipPhoto(i)}
              >
                <div className="front">
                  <img src={m.src} alt="" />
                </div>
                <div className="back">
                  <p>{m.text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #ff86b6;
          padding: 60px 20px;
          text-align: center;
          font-family: Georgia, serif;
        }

        h1 {
          color: white;
          font-size: 36px;
          margin-bottom: 20px;
        }

        .music-btn {
          margin-bottom: 30px;
          background: white;
          border: none;
          padding: 10px 22px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 14px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        .grid {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .slot {
          width: 220px;
          height: 300px;
          position: relative;
        }

        .envelope {
          width: 200px;
          height: 140px;
          background: white;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s;
        }

        .envelope:hover {
          transform: translateY(-6px);
        }

        .polaroid {
          width: 200px;
          height: 260px;
          position: absolute;
          inset: 0;
          margin: auto;
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.8s;
        }

        .polaroid.flip {
          transform: rotateY(180deg);
        }

        .front,
        .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: white;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
        }

        .front img {
          width: 100%;
          height: 80%;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }

        .back {
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-size: 16px;
          color: #444;
        }
      `}</style>
    </div>
  );
}
