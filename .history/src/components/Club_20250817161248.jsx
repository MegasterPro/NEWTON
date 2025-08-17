// Club3D.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import * as THREE from "three";
import "../styles/Club3D.css";

const clubs = [
  { name: "Sciences", color: "#3b82f6", desc: "Découvre nos expériences et projets scientifiques !" },
  { name: "English", color: "#10b981", desc: "Apprends l'anglais de façon ludique et interactive." },
  { name: "Littérature", color: "#f59e0b", desc: "Explore la richesse des grands classiques et modernes." },
  { name: "Arts", color: "#ef4444", desc: "Exprime ta créativité à travers peinture, musique et théâtre." },
];

// Composant Sphere pour chaque club
function ClubSphere({ club, position, onHover, onLeave, onClick }) {
  return (
    <mesh
      position={position}
      onPointerOver={() => onHover(club)}
      onPointerOut={onLeave}
      onClick={() => onClick(club)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={club.color}
        emissive={club.color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  );
}

export default function Club3D() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section className="club3d-section">
      <h1 className="title">Nos Meilleurs Clubs</h1>

      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* Lumières */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Sphères en cercle */}
        {clubs.map((club, i) => {
          const angle = (i / clubs.length) * Math.PI * 2;
          const radius = 5;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <ClubSphere
              key={club.name}
              club={club}
              position={[x, 0, z]}
              onHover={setHovered}
              onLeave={() => setHovered(null)}
              onClick={setSelected}
            />
          );
        })}

        {/* Contrôles Orbit */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      {/* Overlay d’infos */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="club-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <h2 style={{ color: selected.color }}>{selected.name}</h2>
            <p>{selected.desc}</p>
            <button onClick={() => setSelected(null)}>Fermer</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
