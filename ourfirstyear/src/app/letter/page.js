"use client";

import { useState } from "react";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      <div
  className={`scroll ${open ? "open" : ""}`}
  data-open={open}
>
        {/* Wooden rod – top */}
        <div className="rod top"></div>

        {/* Paper */}
        <main className="paper max-w-2xl mx-auto px-8 py-20 leading-8">
          {/* CONTENT — UNCHANGED */}
          <p>
            Pehle tho mujhe pata bhi nahi tha asli pyaar kya hota hei , but jabse
            tumhe mila tabse realize hua saccha pyaar kya hota hai .
            <br /><br />
            Mei tho itna sochta tha ki pyaar wagera mere liye hai hi nahi, aur ye
            sab fake rehta...par tum jabse aye ho life mei tabse ye sab feel
            karke life mei chaar chand lag gaye( teen chand tunmhare chehre ke aur
            ek chand ye feeing ka)...
            Tumhe jab bhi dekhta tho mujhe realize hota ki tum bass mere
            girlfriend and future nahi ho, but meri responsibility bhi ho...mera
            harr decision tumhe influence karta hai..aur isiliye mere har choices
            tumhare aur hamare future ke better ke liye hi rahenge hameshha
          </p>

          <div className="my-12 border-t opacity-20"></div>

          <p>
            Tumhe dekhta tho kabhi kabhi bura bhi lagta ki itni pyaari ladki ko
            kaise hurt kar sakta koi jaise tumhare past mei tumhare saath hua,
            But jo bhi hua mere liye acha hua kyuuki tum mujhe jo mile...aur
            whatever happens , it happens for the good of oneself.
          </p>

          <div className="my-12 border-t opacity-20"></div>

          <p>
            Aur mujhe malum hai wo darr hai tumme abhi bhi but tum bilkul tension
            mat lo mei kabhi waisa nahi karunga.
            Kyuki tumhare alawa mujhe koi dikhta hi nahi Saniya, mei meri family
            ko bhi tumhare baad priority deta hu..aur hamesha tumhe first
            priority pe rakhta
            Kyuki tumhare liye mera pyaar harr second badhra ...abhi aur baddha
            dekho...aur tumhe roz dekhna mujhe bohot acha lgta kabhi kabbhi kaam ke
            wajahse nahi ho pata but wo mera bad luck ...sorry for those days when
            I cannot meet you
          </p>

          <div className="my-12 border-t opacity-20"></div>

          <p>
            Aise hi tumhe roz dekhna chahta hhu mei...mere paas ...raat mei sote
            waqt ...subah uthte waqt... afternoon mei khaate waqt...harr time
            kabhi duur nahi karna chahta mere aakhon ke saamne se.
          </p>

          <p>
            Dekho tum mujhe kuch do yaa na do mei tumhe hamesha bohot saara PYAAR
            dunga.....aur gifts bhi...even though u have nothing to offer me
            "Tum mere Liye Kaafi ho!!!".
            Mei tumhe kabbhi nahi khona chahta...aur mei tumhare alawa meri life
            partner ke form mei kisiko soch bhi nahi sakta.
          </p>

          <div className="my-12 border-t opacity-20"></div>

          <p className="mt-12">
            <strong>I love you a lot, Saniya.</strong><br />
            Happy Anniversary.
          </p>

          <p className="mt-6 opacity-60">— Ayaan</p>
        </main>

        {/* Wooden rod – bottom */}
        <div className="rod bottom"></div>
      </div>

      {!open && (
        <button className="open-btn" onClick={() => setOpen(true)}>
          Gently open the letter 💌
        </button>
      )}

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at center, #ff9fc8 0%, #ff6fae 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .scroll {
          width: 100%;
          max-width: 780px;
          max-height: 68px;
          overflow: hidden;
          transition: max-height 3s cubic-bezier(0.16, 1, 0.3, 1);
          filter: drop-shadow(0 40px 55px rgba(0, 0, 0, 0.4));
        }

        .scroll.open {
          max-height: 2800px;
        }

        .rod {
          height: 30px;
          background: linear-gradient(to bottom, #7a4a25, #3e2413);
          border-radius: 16px;
          box-shadow:
            inset 0 0 6px rgba(255, 255, 255, 0.25),
            inset 0 -4px 6px rgba(0, 0, 0, 0.4);
        }

        .paper {
        
  background:
    radial-gradient(120% 80% at center, transparent 60%, rgba(0,0,0,0.08)),
    repeating-linear-gradient(
      transparent,
      transparent 28px,
      rgba(0, 0, 0, 0.025) 29px
    ),
    #fff6e8;

  color: #4b3626;
  font-size: 17.5px;

  /* 🔒 HARD BLOCK RENDERING */
  visibility: hidden;
  max-height: 0;
  overflow: hidden;

  opacity: 0;
  transform: translateY(-20px);

  transition:
    max-height 2.6s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 1.4s ease 0.9s,
    transform 1.4s ease 0.9s;

  border-left: 2px solid rgba(0, 0, 0, 0.07);
  border-right: 2px solid rgba(0, 0, 0, 0.07);
}
.scroll[data-open="true"] .paper {
  visibility: visible;
  max-height: 2000px;
  opacity: 1;
  transform: translateY(0);
}



        .scroll.open .paper {
  max-height: 2000px; /* large enough for full letter */
  opacity: 1;
  transform: translateY(0);
}


        @keyframes breathe {
          0%, 100% {
            box-shadow: inset 0 0 0 rgba(0,0,0,0.15);
          }
          50% {
            box-shadow: inset 0 0 25px rgba(0,0,0,0.18);
          }
        }

        .open-btn {
          margin-top: 36px;
          background: white;
          border: none;
          padding: 14px 36px;
          border-radius: 999px;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
          transition: transform 0.25s ease;
        }

        .open-btn:hover {
          transform: scale(1.0);
        }
      `}</style>
    </div>
  );
}
