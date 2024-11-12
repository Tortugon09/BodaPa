import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Sections/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Reproductor de audio con música de fondo */}
      <audio src="/music.mp3" autoPlay loop controls={false} />

      {/* Tu componente Header */}
      <Header />
    </>
  );
}

export default App;
