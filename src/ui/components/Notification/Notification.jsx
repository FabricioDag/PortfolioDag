import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';

import style from './Notification.module.css';

const Notification = () => {
  const { t } = useContext(LanguageContext);

  const [isVisible, setIsVisible] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const hasShownNotification = localStorage.getItem('hasShownNotification');
    if (!hasShownNotification) {
      setIsFirstTime(true);
      setIsVisible(true);
      localStorage.setItem('hasShownNotification', 'true');
    } else {
      setIsVisible(true);
    }
  }, []);

  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={`${style.notification} ${isFirstTime ? style.pop : ''}`}>
        <p className={style.notificationCall}>{t('notificationCall')} </p>
        <p className={style.notificationMessage}>{t('notificationMessage')}</p>
        {/* <small>Notificação 19:20h</small> */}
        <button
          className={style.notificationButton}
          onClick={closeNotification}
        >
          {t('notificationConfirm')}
        </button>
      </div>
    )
  );
};

export { Notification };
