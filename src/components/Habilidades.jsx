import habilidadesData from "../data/habilidades.json";
import { useMemo } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const iconosMap = {
  FaHtml5: FaIcons.FaHtml5,
  FaCss3Alt: FaIcons.FaCss3Alt,
  FaJs: FaIcons.FaJs,
  FaReact: FaIcons.FaReact,
  FaBootstrap: FaIcons.FaBootstrap,
  SiC: SiIcons.SiC,
  SiExpress: SiIcons.SiExpress,
  FaNodeJs: FaIcons.FaNodeJs,
  FaLinux: FaIcons.FaLinux,
  SiRaspberrypi: SiIcons.SiRaspberrypi,
  FaMicrochip: FaIcons.FaMicrochip,
  FaTerminal: FaIcons.FaTerminal,
  FaUsers: FaIcons.FaUsers,
  FaLightbulb: FaIcons.FaLightbulb,
  FaRocket: FaIcons.FaRocket,
  FaPalette: FaIcons.FaPalette,
  FaBook: FaIcons.FaBook
};

function Habilidades() {
  const habilidadesCards = useMemo(() =>
  habilidadesData.map((hab, index) => {
    const Icono = iconosMap[hab.icono];
    return (
      <div
        key={index}
        className={`habilidad-card habilidad-${hab.categoria.toLowerCase().replace(/ /g, '-')}`}
      >
        {Icono && <Icono size={36} style={{ marginBottom: "0.5rem" }} />}
        <h3>{hab.nombre}</h3>
      </div>
    );
  }),
  [habilidadesData]
);


  return (
    <section id="habilidades" className="habilidades">
      <h2>Habilidades</h2>
      <div className="habilidades-container">
        {habilidadesCards}
      </div>
    </section>
  );
}

export default Habilidades;
