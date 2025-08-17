import React from "react";
import { motion } from "framer-motion";
import "../styles/another.css";

export default function Another() {
  const data = [
    {
      className: "clubs",
      title: "Clubs & Activités",
      description:
        "Nos clubs offrent aux élèves l'opportunité de développer leurs talents et passions en dehors des cours, dans un cadre collaboratif et stimulant.",
      img: "/images/aa.png",
    },
    {
      className: "professeurs",
      title: "Nos Professeurs",
      description:
        "Une équipe pédagogique passionnée et expérimentée, prête à accompagner chaque élève vers la réussite académique et personnelle.",
      img: "/images/cc.png",
    },
    {
      className: "participation-cours-cultureG",
      title: "Cours & Culture Générale",
      description:
        "Un programme complet qui combine apprentissages académiques et ouverture culturelle pour former des citoyens éclairés.",
      img: "/images/bb.png",
    },
    {
      className: "le-cadre-educatif",
      title: "Cadre Éducatif",
      description:
        "Un environnement sûr, verdoyant et motivant qui encourage l’excellence et le bien-être des élèves.",
      img: "/images/lolo.avif",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="another-container">
      {data.map((section, i) => (
        <motion.div
          key={i}
          className={`another-section ${i % 2 !== 0 ? "reverse" : ""}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Image */}
          <motion.div
            className="section-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={section.img} alt={section.title} />
          </motion.div>

          {/* Texte */}
          <div className="section-text">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <motion.button
              className="cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              En savoir plus
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
