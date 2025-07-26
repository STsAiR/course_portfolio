import React, { useState, useRef, useEffect } from "react";

const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo8.jpg",
  "/images/photo9.jpg",
  "/images/photo10.jpg",
  "/images/photo11.jpg",
  "/images/photo12.jpg",
];

export default function Portfolio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Pause audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  return (
    <>
      {/* <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }
        h1 {
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-shadow: 1px 1px 5px rgba(0,0,0,0.4);
        }
        .audio-control {
          margin-bottom: 2rem;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid #fff;
          border-radius: 30px;
          padding: 0.5rem 1.5rem;
          font-size: 1.2rem;
          user-select: none;
          transition: background 0.3s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .audio-control:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1rem;
          width: 100%;
          max-width: 1000px;
        }
        .photo {
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #222;
        }
        .photo img {
          width: 100%;
          display: block;
          transition: transform 0.4s ease;
        }
        .photo:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 30px rgba(0,0,0,0.6);
        }
        .photo:hover img {
          transform: scale(1.1);
        }
        @media (max-width: 480px) {
          .audio-control {
            font-size: 1rem;
            padding: 0.4rem 1rem;
          }
        }
      `}</style> */}

      <h1>My Portfolio</h1>

      <button
        className="audio-control"
        onClick={togglePlay}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="6" y="5" width="4" height="14"></rect>
              <rect x="14" y="5" width="4" height="14"></rect>
            </svg>
            Pause Music
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Music
          </>
        )}
      </button>

      <audio ref={audioRef} src="/audio/bgm.mp3" loop preload="auto" />

      <div className="gallery" aria-label="Portfolio photos gallery">
        {photos.map((src, i) => (
          <div
            className="photo"
            key={i}
            tabIndex={0}
            aria-label={`Portfolio photo ${i + 1}`}
          >
            <img src={src} alt={`Portfolio photo ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
}
