import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./clubs.css";

const clubs = [
  { name: "Sciences", color: "#3b82f6", desc: "Découvre nos expériences et projets scientifiques !" },
  { name: "English", color: "#10b981", desc: "Apprends l'anglais de façon ludique et interactive." },
  { name: "Littérature", color: "#f59e0b", desc: "Explore la richesse des grands classiques et modernes." },
  { name: "Arts", color: "#ef4444", desc: "Exprime ta créativité à travers peinture, musique et théâtre." },
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

      {clubs.map((club, i) => {
        const start = i / clubs.length;
        const end = (i + 1) / clubs.length;

        // Scale pour faire grossir chaque bulle
        const scale = useTransform(scrollYProgress, [start, end], [0.5, 4]);
        // Opacité pour n'afficher qu'une bulle à la fois
        const opacity = useTransform(
          scrollYProgress,
          [start, start + 0.05, end - 0.05, end],
          [0, 1, 1, 0]
        );
        // Position verticale pour centrer la bulle
        const y = useTransform(scrollYProgress, [start, end], [100, -100]);

        return (
          <motion.div
            key={club.name}
            className="bubble-wrapper"
            style={{ opacity, scale, y }}
          >
            {/* Halo lumineux */}
            <motion.div
              className="particles"
              style={{
                background: `radial-gradient(circle, ${club.color}55 0%, transparent 70%)`,
                opacity,
              }}
            />

            {/* Bulle principale */}
            <motion.div
              className="bubble"
              style={{
                background: `radial-gradient(circle at 30% 30%, white 10%, ${club.color} 80%)`,
                boxShadow: `0 30px 60px ${club.color}88`,
              }}
            >
              {club.name}
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
