import style from './About.module.css';
import {useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';
const About = () => {
  const { t } = useContext(LanguageContext); 
  return (
    <div className={`${style.About} application`}>
      <div className={style.placeholderVideo}></div>

      <div className={style.textArea}>
        <p className={style.mainText}>
          {t('aboutText')}
        </p>
      </div>
    </div>
  );
};

export { About };
