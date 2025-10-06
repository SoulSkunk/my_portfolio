import styles from "../../styles/Experience.module.css";
import Titles from "../Titles";

function Experience() {
  const experiences = [
    {
      yearStart: 2024,
      yearEnd: 2027,
      title: "Ynov",
      organization: "Mastère Expert dév web",
      description:
        "Je suis en quatrième année spécialisation dév applications web.",
      type: "study",
    },
    {
      yearStart: 2022,
      yearEnd: 2024,
      title: "Mediaschool",
      organization: "Bachelor SupdewebDev",
      description:
        "J'ai validé mes deux premières années d'étude en développement web.",
      type: "study",
    },
    {
      yearStart: 2018,
      yearEnd: 2021,
      title: "Les Eucalyptus",
      organization: "Bac Technologique",
      description:
        "C'était la découverte du code, et le début d'une longue histoire.",
      type: "study",
    },
  ];

  return (
    <div id="experiences" className="container mt-section">
      <Titles value="Expériences" />

      <div className={`${styles.experiencesRow} mt-5`}>
        {experiences.map((experience, i) => (
          <div key={i} className={styles.experienceCard}>
            <Competence experience={experience} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Competence({ experience }) {
  return (
    <div className={`position-relative text-center ${styles.competence}`}>
      {experience.type === "study" && (
        <span className={styles.studyIcon}>
          <i
            className={`${styles.icon} bi bi-mortarboard`}
            style={{ color: "#290056" }}
          ></i>
        </span>
      )}
      <small className="text-muted d-block mb-1">
        {experience.yearStart} - {experience.yearEnd ?? "Present"}
      </small>
      <h3 className="mt-2 fs-5 fw-bold">{experience.title}</h3>
      <small className="d-block mb-2">{experience.organization}</small>
      <p className="m-0">{experience.description}</p>
    </div>
  );
}

export default Experience;
