import { useState } from 'react';
import Galeria from './Galeria.jsx';
import '../styles/App.css';

function App() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <div className={modoEscuro ? 'App escuro' : 'App claro'}>
      <header className="header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
          alt="Ícone Modo Escuro"
          className="icone-modo-escuro"
          onClick={alternarModoEscuro}
        />
      </header>
      <Galeria />
    </div>
  );
}

export default App;
