import React from "react";
import { motion } from "framer-motion";
import "../styles/another.css";

export default function Another() {
  const data = [
    {
      className: "clubs",
      title: "Clubs & Activités",
      content: [
        { img: "/images/aa.png", text: "Club Scientifique" },
        { img: "/images/bb.png", text: "Club de Lecture" },
      ],
    },
    {
      className: "professeurs",
      title: "Nos Professeurs",
      content: [{ img: "/images/cc.png", text: "Des experts passionnés" }],
    },
    {
      className: "participation-cours-cultureG",
      title: "Cours & Culture Générale",
      content: [
        { img: "/images/aa.png", text: "Programmes enrichissants" },
      ],
    },
    {
      className: "le-cadre-educatif",
      title: "Cadre Éducatif",
      content: [
        { img: "/images/lolo.avif", text: "Un environnement sain et motivant" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="another-container">
      {data.map((section, i) => (
        <motion.div
          key={i}
          className={`${section.className} fade-in`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <h2>{section.title}</h2>
          <div className="section-content">
            {section.content.map((item, j) => (
              <motion.span
                key={j}
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="img-wrapper">
                  <img src={item.img} alt={item.text} />
                </div>
                <p>{item.text}</p>
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
