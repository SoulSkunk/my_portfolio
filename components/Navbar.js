import { useState } from "react";
import styles from "@/styles/Navbar.module.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark border-bottom position-fixed w-100 z-3${
        menuOpen ? styles.menuOpen : ""
      }`}
      style={{ backgroundColor: "#290056", zIndex: 1030 }}
    >
      <div className=" container">
        <a className="navbar-brand" href="#">
          Kylian's Portfolio
        </a>

        {/* --- Bouton burger --- */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* --- Menu --- */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <a
              className={`nav-link ${styles.link} ps-4`}
              href="#about"
              onClick={closeMenu}
            >
              A propos
            </a>
            <a
              className={`nav-link ${styles.link} ps-4`}
              href="#skills"
              onClick={closeMenu}
            >
              Compétences
            </a>
            <a
              className={`nav-link ${styles.link} ps-4`}
              href="#experiences"
              onClick={closeMenu}
            >
              Parcours
            </a>
            <a
              className={`nav-link ${styles.link} ps-4`}
              href="#works"
              onClick={closeMenu}
            >
              Projets
            </a>
            {/* <a
              className={`nav-link ${styles.link} ps-4`}
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
