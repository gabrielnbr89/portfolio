import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // íconos hamburguesa y cerrar
import miFoto from '../assets/miFoto.jpg';

function Sidebar({ irAContacto }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("presentacion");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["presentacion", "habilidades", "proyectos", "contacto"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const bottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      let currentSection = "presentacion";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      if (bottomOfPage) {
        currentSection = "contacto"; // fuerza el resalte al final
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // marca la sección activa al cargar la página

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón hamburguesa visible en móviles */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <img src={miFoto} alt="Gabriel" className="sidebar-logo" />
        <ul className="nav-links">
          <li><a className={activeSection === "presentacion" ? "active" : ""} href="#presentacion" onClick={toggleMenu}>Presentación</a></li>
          <li><a className={activeSection === "habilidades" ? "active" : ""} href="#habilidades" onClick={toggleMenu}>Habilidades</a></li>
          <li><a className={activeSection === "proyectos" ? "active" : ""} href="#proyectos" onClick={toggleMenu}>Proyectos</a></li>
          <li><a className={activeSection === "contacto" ? "active" : ""} href="#contacto" onClick={(e) => {
            e.preventDefault();
            toggleMenu();
            irAContacto();
          }}>Contacto</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
