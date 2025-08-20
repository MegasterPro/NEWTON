// Club3D.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../styles/Club.css";

const clubs = [
  { name: "Sciences", color: "#3b82f6", desc: "Découvre nos expériences et projets scientifiques !" },
  { name: "English", color: "#10b981", desc: "Apprends l'anglais de façon ludique et interactive." },
  { name: "Littérature", color: "#f59e0b", desc: "Explore la richesse des grands classiques et modernes." },
  { name: "Arts", color: "#ef4444", desc: "Exprime ta créativité à travers peinture, musique et théâtre." },
];

function ClubSphere({ club, position, onHover, onLeave, onClick, isHovered }) {
  return (
    <group position={position}>
      {/* Sphère */}
      <mesh
        castShadow
        receiveShadow
        onPointerOver={() => onHover(club)}
        onPointerOut={onLeave}
        onClick={() => onClick(club)}
        scale={isHovered ? 1.2 : 1}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={club.color}
          emissive={isHovered ? club.color : "#000"}
          emissiveIntensity={isHovered ? 0.6 : 0.2}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>

      {/* Nom du club */}
      <Text
        position={[0, -1.6, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor="black"
      >
        {club.name}
      </Text>
    </group>
  );
}

export default function Club3D() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section className="club3d-section">
      <h1 className="title">Nos Meilleurs Clubs</h1>

      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 3, 10], fov: 50 }}
      >
        {/* Lumières */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-10, -5, -10]} intensity={0.5} />

        {/* Sol pour capter les ombres */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

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
              isHovered={hovered?.name === club.name}
            />
          );
        })}

        {/* Contrôles Orbit */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      {/* Overlay infos */}
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
