function Presentacion({irAContacto}) {
  return (
    <section id="presentacion" className="presentacion">
      <h1>Hola, soy Gabriel</h1>
      <p>
        Apasionado por la programación y la electrónica, disfruto crear proyectos conectados
    y darles vida con un buen diseño. Autodidacta por naturaleza y amante del trabajo en equipo,
    aprendo rápidamente y me encanta profundizar en cada desafío. Experiencia con React, Node.js, IoT y Linux,
    siempre buscando combinar backend sólido con frontend atractivo.  
    Entre código y circuitos, me gusta perderme en la naturaleza, pescar, acampar o volar en planeador,
    porque cada aventura me inspira nuevas ideas y soluciones creativas.
      </p>
      <button onClick={irAContacto} className="btn">Contáctame</button>
    </section>
  );
}

export default Presentacion;
