import style from './About.module.css';
import {useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';
const About = () => {
  const { t } = useContext(LanguageContext); 
  return (
    <div className={`${style.About} application`}>

      <div className={style.aboutPicture}></div>
      
      <div className={style.aboutHeader}>
        <h1>Fabrício D'Agostini</h1>
        <h2>Developer mobile & web</h2>
      </div>
      

      <div className={style.textArea}>
        <p className={style.mainText}>
          {t('aboutText')}
        </p>
      </div>
    </div>
  );
};

export { About };
