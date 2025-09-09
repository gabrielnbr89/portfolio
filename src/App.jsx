import './App.css';
import { useRef } from 'react';
import Presentacion from './components/Presentacion';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const contactoRef = useRef(null);
  const nombreRef = useRef(null);

  const irAContacto = () => {
    contactoRef.current.scrollIntoView();
    nombreRef.current.focus();
  }

  return (
    <>
      <Sidebar irAContacto={irAContacto}/>
      <div className="holder">
        <Presentacion irAContacto={irAContacto}/>
        <Habilidades />
        <Proyectos />
        <Contacto contactoRef={contactoRef} nombreRef={nombreRef}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
