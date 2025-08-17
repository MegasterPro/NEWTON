import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "../styles/Club.css";

const clubs = [
  { name: "Sciences", color: "#3b82f6", desc: "Découvre nos expériences et projets scientifiques !" },
  { name: "English", color: "#10b981", desc: "Apprends l'anglais de façon ludique et interactive." },
  { name: "Litterature", color: "#f59e0b", desc: "Explore la richesse des grands classiques et modernes." },
  { name: "Arts", color: "#ef4444", desc: "Exprime ta créativité à travers peinture, musique et théâtre." },
];

export default function Club() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [hovered, setHovered] = useState(null);

  return (
    <section ref={containerRef} className="club-section">
      <h1 className="title">Nos Meilleurs Clubs</h1>

      <div className="sticky-wrapper">
        {clubs.map((club, i) => {
          const start = i / clubs.length;
          const end = (i + 1) / clubs.length;

          const scale = useTransform(scrollYProgress, [start, end], [0.5, 1.5]);
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={club.name}
              className="bubble-wrapper"
              style={{ opacity, scale }}
            >
              {/* Particules */}
              <motion.div
                className="particles"
                style={{
                  opacity,
                  background: `radial-gradient(circle, ${club.color}33 0%, transparent 70%)`,
                }}
              />

              {/* Bulle */}
              <motion.div
                className="bubble"
                style={{
                  background: `radial-gradient(circle at 30% 30%, white 10%, ${club.color} 80%)`,
                  boxShadow: `0 20px 40px ${club.color}55`,
                }}
                onMouseEnter={() => setHovered(club)}
                onMouseLeave={() => setHovered(null)}
              >
                {club.name}
              </motion.div>

              {/* Card */}
              {hovered?.name === club.name && (
                <motion.div
                  className="club-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  style={{ borderColor: club.color }}
                >
                  <h3>{club.name}</h3>
                  <p>{club.desc}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
