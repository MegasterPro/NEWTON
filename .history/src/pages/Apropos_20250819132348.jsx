// src/pages/Apropos.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Apropos = () => {
  const infos = [
    { label: "Nom", value: "Elhadji Samba Seydi" },
    { label: "Passion", value: "Programmation & Cybersécurité" },
    { label: "Spécialités", value: "Web, Jeux, IA, Sécurité" },
    { label: "Langages", value: "HTML, CSS, JS, PHP, Python, C#, React, Laravel" },
  ];

  const contacts = [
    { icon: <Mail />, text: "samba@example.com", link: "mailto:samba@example.com" },
    { icon: <Phone />, text: "+221 77 000 00 00" },
    { icon: <Github />, text: "GitHub", link: "https://github.com/MegasterPro" },
    { icon: <Linkedin />, text: "LinkedIn", link: "https://linkedin.com/in/tonprofil" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        À Propos
      </motion.h1>

      {/* Section Infos */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {infos.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-6">
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-xl font-semibold">{item.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Section Contact */}
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Contact
      </motion.h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <span>{c.icon}</span>
            <span>{c.text}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Apropos;
