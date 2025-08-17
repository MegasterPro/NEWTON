import React, { useEffect } from "react";
import "../styles/";

export default function Another() {
  // Optionnel : animation au scroll
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");
    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      className: "clubs",
      title: "Clubs & Activités",
      content: [
        { img: "/images/club1.png", text: "Club Scientifique" },
        { img: "/images/club2.png", text: "Club de Lecture" },
      ],
    },
    {
      className: "professeurs",
      title: "Nos Professeurs",
      content: [{ img: "/images/prof1.png", text: "Des experts passionnés" }],
    },
    {
      className: "participation-cours-cultureG",
      title: "Cours & Culture Générale",
      content: [
        { img: "/images/cours.png", text: "Programmes enrichissants" },
      ],
    },
    {
      className: "le-cadre-educatif",
      title: "Cadre Éducatif",
      content: [
        { img: "/images/cadre.png", text: "Un environnement sain et motivant" },
      ],
    },
  ];

  return (
    <div className="another-container">
      {data.map((section, i) => (
        <div key={i} className={`${section.className} fade-in`}>
          <h2>{section.title}</h2>
          <div className="section-content">
            {section.content.map((item, j) => (
              <span key={j}>
                <img src={item.img} alt={item.text} />
                <p>{item.text}</p>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
