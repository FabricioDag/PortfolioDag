import style from './Spacetourism.module.css'
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
    <div className={`${style.Spacetourism} application`}>
       {loading ? (
        <div className={style.splashScreen}>
          <div className={style.logo}>🚀</div>
          <h1 className={style.appTitle}>Space Tourism SplashScreen</h1>
        </div>
      ) : (
        <>
          <Header setOpenedPage={setOpenedPage} />
          {pages[openedPage]}
        </>
      )}

      {/* <Header setOpenedPage={setOpenedPage} />
      {pages[openedPage]} */}

    </div>
  );
};

export { Spacetourism };
