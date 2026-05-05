"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/WhatsApp%20Image%202569-02-26%20at%2015.43.30.jpeg", position: "center center" },
  { src: "/whatsapp-15-43.jpeg", position: "top left" },
  { src: "/pexels-tiger-lily-4483610.jpg", position: "center center" },
  { src: "/pexels-kindelmedia-8325718.jpg", position: "center center" },
  { src: "/thedigitalartist-ai-generated-8069992_1920-copy.jpg", position: "center center" },
];

const INTERVAL = 5000;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % slides.length;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: i === current ? 1 : i === prev ? 0 : 0,
            zIndex: i === current ? 1 : i === prev ? 0 : -1,
          }}
        >
          <Image
            src={slide.src}
            alt="Hero background"
            fill
            priority={i === 0}
            className="object-cover scale-105"
            style={{ objectPosition: slide.position }}
          />
        </div>
      ))}
      <div className="absolute inset-0 hero-overlay-home z-10" />
    </div>
  );
}
