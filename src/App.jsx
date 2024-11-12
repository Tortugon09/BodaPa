import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Sections/Header';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal abierto por defecto
  const [audioMuted, setAudioMuted] = useState(true); // Inicialmente el audio está en silencio

  // Función para manejar el clic en el modal (para reproducir la música y cerrar el modal)
  const handleModalClick = () => {
    // Reproducir el audio
    const audio = document.getElementById('background-audio');
    if (audio && audioMuted) {
      audio.play().catch((err) => {
        console.log('Error al intentar reproducir el audio:', err);
      });
      setAudioMuted(false); // Desmutea el audio
    }

    // Cerrar el modal
    setIsModalOpen(false);
  };

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

      {/* Modal que aparece cuando el componente se carga */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClick} // Cierra el modal y reproduce la música cuando se hace clic en cualquier parte
        >
          <div className="bg-main p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-2xl font-semibold mb-4">¡Bienvenido!</h2>
            <p className="mb-4">Muchas gracias por abrir nuestra invitacion</p>
            <button 
              className="px-4 py-2 bg-second text-black rounded-full focus:outline-none"
              onClick={handleModalClick} // Cierra el modal cuando se hace clic en el botón
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Tu componente Header */}
      <Header />
    </>
  );
}

export default App;
