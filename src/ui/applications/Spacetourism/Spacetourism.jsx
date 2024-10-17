import './Spacetourism.css';
import { useState, useEffect } from 'react';

import { Header } from './components';
import { Home, Destinations, Crew, Technology } from './pages';

const pages = {
  Home: <Home />,
  Destinations: <Destinations />,
  Crew: <Crew />,
  Technology: <Technology />,
};

const Spacetourism = () => {
  const [openedPage, setOpenedPage] = useState('Home');
  const [loading, setLoading] = useState(true);

  // Simula o tempo de carregamento do aplicativo
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Oculta a splash screen após 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timeout quando o componente for desmontado
  }, []);

  return (
    <div className="spacetourism applicationF">
      {loading ? (
        <div className="splash-screen">
          <div className="logo">🚀</div>
          <h1 className="app-title">Meu App</h1>
        </div>
      ) : (
        <>
          <Header setOpenedPage={setOpenedPage} />
          {pages[openedPage]}
        </>
      )}
    </div>
  );
};

export { Spacetourism };
