import style from './PomodoroModal.module.css';
import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';
import { useContext } from 'react';

const PomodoroModal = ({ isOpen, onClose, children }) => {
  const { t } = useContext(LanguageContext);
  if (!isOpen) return null;

  return (
    <div className={style.modalBg} onClick={onClose}>
      <div className={style.modalWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalTop}>
          <h3 className={style.modalTitle}>{t('settings')}</h3>
          <button className={style.closeModalButton} onClick={onClose}>X</button>
        </div>

        <div className={style.modalChildren}>{children}</div>
      </div>
    </div>
  );
};

export { PomodoroModal };
