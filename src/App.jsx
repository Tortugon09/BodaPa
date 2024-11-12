import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Sections/Header';

function App() {
  const [audioMuted, setAudioMuted] = useState(true);

  // Función para manejar el evento de scroll o clic
  const handleUserInteraction = () => {
    const audio = document.getElementById('background-audio');
    if (audio && audioMuted) {
      audio.play().catch((err) => {
        console.log('Error al intentar reproducir el audio:', err);
      });
      setAudioMuted(false); // Desmutea el audio después del primer clic o scroll
      window.removeEventListener('scroll', handleUserInteraction); // Elimina el event listener después de que se haya activado
      window.removeEventListener('click', handleUserInteraction); // Elimina el event listener de clic
    }
  };

  // Usamos useEffect para agregar el listener de scroll o clic al cargar el componente
  useEffect(() => {
    window.addEventListener('scroll', handleUserInteraction);
    window.addEventListener('click', handleUserInteraction); // También escucha el clic en cualquier parte de la página

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [audioMuted]);

  return (
    <>
      {/* Música de fondo (inicialmente en silencio) */}
      <audio
        id="background-audio"
        src="/music.mp3"
        autoPlay
        loop
        muted={audioMuted}
        controls={false}
      />

      {/* Tu componente Header */}
      <Header />
    </>
  );
}

export default App;
