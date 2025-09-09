import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contacto({ contactoRef, nombreRef }) {
  const [exitoMensaje, setExitoMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const emailRef = useRef(null);
  const mensajeRef = useRef(null);

  const handleEnter = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const nombre = nombreRef.current.value.trim();
  const email = emailRef.current.value.trim();
  const mensaje = mensajeRef.current.value.trim();

  if (!nombre || !email || !mensaje) {
    setExitoMensaje("Por favor, completa todos los campos.");
    setTipoMensaje("error");
    return;
  }

  // Enviar con EmailJS usando send
  emailjs.send(
    'service_s8wdunu',       // tu service ID
    'template_mbik1at',      // tu template ID
    {
      from_name: nombre,
      from_email: email,
      message: mensaje
    },
    'LXiqjZ2pzbVUh7Ggo'     // tu public key
  ).then(
    (result) => {
      setExitoMensaje("Mensaje enviado con éxito!");
      setTipoMensaje("exito");
      // Limpiar inputs manualmente
      nombreRef.current.value = "";
      emailRef.current.value = "";
      mensajeRef.current.value = "";
      setTimeout(() => setExitoMensaje(""), 3000);
    },
    (error) => {
      setExitoMensaje("Error al enviar el mensaje. Intenta nuevamente.");
      setTipoMensaje("error");
    }
  );
};



  return (
    <section id="contacto" ref={contactoRef} className="contacto">
      <h2>Contacto</h2>
     <p className={`form-message ${tipoMensaje}`} aria-live="polite">
  {exitoMensaje}
</p>

      <form className="formulairioContacto" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          ref={nombreRef}
          name="nombre"
          placeholder="Tu nombre"
          onKeyDown={(e) => handleEnter(e, emailRef)}
        />
        <label htmlFor="email">e-mail </label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          name="email"
          placeholder="Tu email"
          onKeyDown={(e) => handleEnter(e, mensajeRef)}
        />
        <label htmlFor="mensaje">Mensaje: </label>
        <textarea
          name="mensaje"
          ref={mensajeRef}
          id="mensaje"
          placeholder="Tu mensaje"
          className="mensajeContacto"
        />
        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
