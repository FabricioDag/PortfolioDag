import style from './Spacetourism.module.css'
import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Simulação do tempo de carregamento

    return () => clearTimeout(timer); // Limpeza do timer quando o componente for desmontado
  }, []); // Sem dependências para rodar apenas uma vez

  return (
    <div className={`${style.Spacetourism} application`}>
        
      
      <AnimatePresence>
            {isVisible && (
              <motion.div
                className={style.initialPage}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className={style.logoInitialPage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: .2, duration: .5 }}
                >
                  <h1>LOGO</h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: .5 }}
                  >
                    Space Tourism
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
        </AnimatePresence>
        <Header setOpenedPage={setOpenedPage} />
        {pages[openedPage]}  
    </div>
  );
};

export { Spacetourism };
