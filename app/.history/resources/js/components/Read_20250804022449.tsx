import { motion, Variants } from "framer-motion";

const sections = [
  {
    img: "/images/lolo.avif",
    title: "Un cadre adéquat",
    description: "Un incontournable de la cuisine italienne, adorée dans le monde entier.",
  },
  {
    img: "/images/cc.avif",
    title: "Des enseignants performants",
    description: "Symbole de la restauration rapide, il a conquis les papilles partout.",
  },
  {
    img: "/images/lolo.avif",
    title: "Le sushi japonais",
    description: "Raffiné, sain et délicieux, parfait pour les amateurs de poisson cru.",
  },
];

export default function ScrollAnimatedSection() {
  return (
    <div style={containerStyle}>
      {sections.map((section, index) => (
        <AnimatedSection
          key={index}
          img={section.img}
          title={section.title}
          description={section.description}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}

interface AnimatedSectionProps {
  img: string;
  title: string;
  description: string;
  reverse?: boolean;
}

function AnimatedSection({ img, title, description, reverse }: AnimatedSectionProps) {
  return (
    <motion.div
      style={{
        ...sectionStyle,
        flexDirection: reverse ? "row-reverse" : "row",
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }} // 🔁 rejoue l'animation
      variants={sectionVariants}
    >
      <img src={img} alt={title} style={imageStyle} />
      <div style={textContainerStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={descStyle}>{description}</p>
      </div>
    </motion.div>
  );
}

const sectionVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  padding: "4rem 2rem",
};

const sectionStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",
  flexWrap: "wrap",
};

const imageStyle: React.CSSProperties = {
  width: "400px",
  height: "auto",
  borderRadius: "20px",
  objectFit: "cover",
};

const textContainerStyle: React.CSSProperties = {
  maxWidth: "500px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.8rem",
  marginBottom: "1rem",
};

const descStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#444",
};
