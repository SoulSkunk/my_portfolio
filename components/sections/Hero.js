import { useEffect, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import styles from "../../styles/Hero.module.scss";
import ThreeDButtons from "../ThreeDButtons";
import Avatar from "@/public/photos/avatar.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  const [scrollAnimation, setScrollAnimation] = useState(null);

  useEffect(() => {
    fetch("/lotties/8167-simple-scroll-down-icon.json")
      .then((res) => res.json())
      .then((data) => setScrollAnimation(data))
      .catch((err) => console.error("Erreur chargement Lottie:", err));
  }, []);

  return (
    <section
      className={`${styles.hero} d-flex flex-column justify-content-center align-items-center text-white position-relative overflow-hidden`}
    >
      <motion.div
        className="text-center px-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Avatar */}
        <Image
          src={Avatar}
          width={140}
          height={140}
          className={`${styles.avatar} rounded-circle shadow-lg border border-3 border-white`}
          alt="Avatar"
        />
        {/* Nom */}
        <h1 className={`${styles.name} fw-bold mt-4`}>Kylian Broccolichi</h1>
        <br />
        {/* Texte intro */}
        <p className={`${styles.text} mt-3`}>
          Bienvenue sur mon portfolio !<br />
          <br />
          Ici, je vais vous présenter mes projets, mes idées et mon univers
          autour du développement web.
        </p>
        {/* Icônes réseaux */}
        <div className="d-flex justify-content-center gap-4 fs-4 mt-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kylian-broccolichi-015141271/"
            className={styles.iconLink}
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/SoulSkunk"
            className={styles.iconLink}
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            target="_blank"
            href="/kylianCv.pdf"
            className={styles.iconLink}
            rel="noreferrer"
          >
            <i className="bi bi-file-earmark-person-fill"></i>
          </a>
        </div>
        {/* Bouton contact */}
        <div className="mt-5">
          <a href="#contact">
            <ThreeDButtons text="Me contacter" />
          </a>
        </div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        className={`${styles.scrollDown} position-absolute bottom-0 mb-4 text-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <small>Scroll Down</small>
        {scrollAnimation && (
          <div className="d-flex justify-content-center mt-1">
            <Lottie
              animationData={scrollAnimation}
              loop
              autoplay
              style={{ height: 40, width: 40 }}
            />
          </div>
        )}
      </motion.div>
    </section>
  );
}
