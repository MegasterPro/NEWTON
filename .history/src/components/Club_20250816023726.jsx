import { useEffect, useState } from "react";
import "../styles/Club.css";

const clubs = [
  { name: "Sciences", color: "#4FC3F7" },
  { name: "English", color: "#81C784" },
  { name: "Litterature", color: "#BA68C8" },
  { name: "Arts", color: "#FFB74D" },
];

export default function Club() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".club-section");
      let index = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          index = i;
        }
      });
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="clubs-container">
      {clubs.map((club, i) => (
        <section key={club.name} className="club-section">
          <div
            className={`bubble ${activeIndex === i ? "active" : ""}`}
            style={{
              background: club.color,
              boxShadow: `0 0 50px ${club.color}`,
            }}
          >
            {club.name}
          </div>
        </section>
      ))}
    </div>
  );
}
