import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/Club.css";

const clubs = [
  { name: "Sciences", color: "#3b82f6" }, // bleu
  { name: "English", color: "#10b981" },  // vert
  { name: "Litterature", color: "#f59e0b" }, // orange
  { name: "Arts", color: "#ef4444" }, // rouge
];

export default function Club() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="club-section">
      <h1 className="title">Nos Meilleurs Clubs</h1>

      <div className="sticky-wrapper">
        {clubs.map((club, i) => {
          const start = i / clubs.length;
          const end = (i + 1) / clubs.length;

          // scale de 0.5 -> 1.5 selon le scroll
          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [0.5, 1.5]
          );

          // opacité : visible seulement quand on est dans sa portion
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.05, end - 0.05, end],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={club.name}
              className="bubble"
              style={{
                backgroundColor: club.color,
                scale,
                opacity,
              }}
            >
              {club.name}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
