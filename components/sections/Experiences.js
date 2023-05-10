import styles from "../../styles/Experience.module.css";
import Titles from "../Titles";

function Experience() {
  const experiences = [
    {
      yearStart: 2022,
      yearEnd: 2025,
      title: "Mediaschool",
      organization: "Bachelor SupdewebDev",
      description:
        "Actuellement étudiant pour devenir développeur Full-stack après mon Bachelor.",
      type: "study", // job
    },
    {
      yearStart: 2018,
      yearEnd: 2021,
      title: "Les Eucalyptus",
      organization: "Bac Technologique",
      description:
        "C'était la découverte du code, et le début d'une longue histoire.",
      type: "study", // job
    },

    {
      yearStart: 2022,
      yearEnd: 2023,
      title: "Coursier",
      organization: "Uber Eats",
      description:
        "Uber m'a apprit l'entreprenariat, je dois gérer moi même mes revenus et quand je dois travailler",
      type: "job", // study / job
    },
    {
      yearStart: "Été 2022",
      yearEnd: "Été 2022",
      title: "Livreur ,serveur",
      organization: "Restaurant de sushis",
      description:
        "J'ai apprit à alterner les rôles pour que je sois adapté au situations qui se présentent",
      type: "job", // job
    },
    {
      yearStart: 2020,
      yearEnd: 2021,
      title: "Plongeur",
      organization: "Pizzeria",
      description:
        "J'étais chargé de la propreté de la cuisine, et des ustensiles",
      type: "job", // study
    },
  ];

  return (
    <div id="experiences" className="container mt-section">
      <Titles value="Expériences" />
      <div className="row mt-5">
        <div className="col-md-6 ">
          <div className="rounded-4 ps-4 pe-5 py-4 bg-white shadow">
            <div className="border-start border-danger">
              <div className="d-flex flex-column gap-5">
                {experiences
                  .slice(0, experiences.length / 2)
                  .map((experience, i) => (
                    <Competence key={i} experience={experience} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="rounded-4 ps-4 pe-5 py-4 bg-white shadow mt-4 mt-md-0">
            <div className="border-start border-danger">
              <div className="d-flex flex-column gap-5">
                {experiences
                  .slice(experiences.length / 2, experiences.length)
                  .map((experience, i) => (
                    <Competence key={i} experience={experience} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Competence({ experience }) {
  return (
    <div className={`ps-5 position-relative ${styles.competence}`}>
      {experience.type === "study" ? (
        <span id="iconss" className={styles.studyIcon}>
          <i className={`${styles.icon} text-danger bi bi-mortarboard`}></i>
        </span>
      ) : (
        ""
      )}
      <small className="text-muted d-block">
        {experience.yearStart} -{" "}
        {experience.yearEnd === null ? "Present" : experience.yearEnd}
      </small>
      <h3 className="mt-2 fs-5 d-inline-block">{experience.title}</h3> -{" "}
      <small>{experience.organization}</small>
      <p className="m-0">{experience.description}</p>
    </div>
  );
}

export default Experience;
