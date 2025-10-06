import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

export default function LottiePlayer() {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef();

  useEffect(() => {
    fetch("/test/animations/adrock.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null; // évite le crash le temps du chargement

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        background: "#fff",
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
