import style from './Contact.module.css';

import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';

const Contact = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className={` ${style.Contact} application`}>
      <div className={style.wrapperContact}>
        <h1>Dev Fabrício Dag</h1>
        <p>{t('underDevelopment')}</p>
      </div>
    </div>
  );
};

export { Contact };
