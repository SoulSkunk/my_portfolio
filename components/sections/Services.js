import styles from "../../styles/Services.module.scss";
import Titles from "../Titles";
import Image from "next/image";
import uxui from "../../public/services/ux-ui.svg";
import development from "../../public/services/development.svg";
import gestion from "../../public/services/gestion.svg";

function Services() {
  const services = [
    {
      img: development,
      title: "Language informatique",
      description:
        "J'ai les bases pour apprendre de nouveaux languages rapidement.",
      bgColor: "#290056",
      color: "white",
    },
    {
      img: uxui,
      title: "UI/UX design",
      description:
        "Je sais mettre en place un wireframe et j'ai des notions de user experience.",
      bgColor: "#4e0a70ff",
      color: "white",
    },
    {
      img: gestion,
      title: "Gestion projet",
      description:
        "J'ai appris à rédiger un cahier des charges et travailler en équipe.",
      bgColor: "rgba(111, 14, 160, 1)",
      color: "white",
    },
  ];

  return (
    <div id="skills" className="container mt-section">
      <Titles value="Compétences" />
      <div className="row">
        {services.map((service, i) => (
          <div key={i} className="col-md-4 mt-4 mt-md-0">
            <div
              style={{ backgroundColor: service.bgColor }}
              className={`rounded-5 d-flex flex-column justify-content-  align-items-center shadow text-center px-4 py-5 h-100 text-${service.color}`}
            >
              <Image
                className={`${styles.imgg}`}
                src={service.img}
                alt={service.title}
              />
              <div>
                <h2 className="fs-4 mt-4">{service.title}</h2>
                <p className="mt-3 mb-0">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-5">
        Vous cherchez votre prochain alternant Développeur Web ?{" "}
        <a href="mailto:kylian.broccolichi@ynov.com">Contactez-moi</a> 👋
      </p>
    </div>
  );
}

export default Services;
