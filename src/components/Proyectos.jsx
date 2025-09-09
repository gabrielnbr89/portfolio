import proyectosData from "../data/proyectos.json"
import { useMemo } from "react";

function Proyectos() {
  const proyectosCards = useMemo(() => (
    proyectosData.map((proyecto, index) => 
      <a
      key={index}
      href={proyecto.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="proyecto-card-link"      
      >
        <div className="proyecto-card">
          <h3>{proyecto.titulo}</h3>
          <p>{proyecto.descripcion}</p>
        </div>
      </a>
    )
  ),[proyectosData]);


  return (
    <section id="proyectos" className="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-container">
        {proyectosCards}
      </div>

    </section>
  );
}

export default Proyectos;
