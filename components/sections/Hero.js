import styles from "../../styles/Hero.module.scss";
import Lottie from "react-lottie";
import animationData from "../../public/lotties/8167-simple-scroll-down-icon.json";
import ThreeDButtons from "../ThreeDButtons";
import Image from "next/image";
import Avatar from "@/public/photos/avatar.jpg";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Hero() {
  return (
    <div className="vh-100 bg-dark d-flex align-items-center justify-content-center">
      <div className="text-white text-center">
        <img
          className={styles.matrice_style_left}
          src="/photos/la-matrice.gif"
        />
        <Image
          src={Avatar}
          width={110}
          height={110}
          className="rounded-circle"
        />
        <img
          className={styles.matrice_style_right}
          src="/photos/la-matrice.gif"
        />

        <h1 id={styles.name_title} className="mt-4">
          Kylian Broccolichi
        </h1>
        <p id={styles.text_title}>
          Etudiant développeur Web en recherche de stage !
        </p>
        <div className="d-flex justify-content-center gap-4 fs-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kylian-broccolichi-015141271/"
            className="text-white"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/SoulSkunk"
            className="text-white"
          >
            <i className="bi bi-github"></i>
          </a>
          <a target="_blank" href="/kylianCv.pdf" className="text-white">
            <i className="bi bi-file-earmark-person-fill"></i>
          </a>
        </div>
        <div className="mt-4">
          <a href="#contact">
            <ThreeDButtons text="Me contacter"></ThreeDButtons>
          </a>
        </div>
      </div>
      <a href="#" className={styles.lottieSection}>
        <small className="text-white">Scroll Down</small>
        <Lottie options={defaultOptions} height={40} width={40} />
      </a>
    </div>
  );
}

export default Hero;
