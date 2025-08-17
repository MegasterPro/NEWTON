import { useEffect, useRef, useState } from "react";
import "../styles/Club.css";

export default function Club() {
  const clubs = ["Sciences", "English", "Litterature", "Arts"];
  const [active, setActive] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.club);
          }
        });
      },
      { threshold: 0.6 } // visible à 60% dans l’écran
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => {
      refs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="clubs-container">
      <h1>Nos Meilleurs Clubs</h1>
      <div className="clubs">
        {clubs.map((club, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            data-club={club}
            className={`bubble ${active === club ? "active" : ""}`}
          >
            {club}
          </div>
        ))}
      </div>
    </div>
  );
}
