import style from './SettingsModal.module.css';

const SettingsModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modalBg} onClick={onClose}>
      <div className={style.modalWrapper}>
        <h3 className={style.modalTitle}>{title}</h3>

        <div
          className={style.modalChildren}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>

        <div className={style.modalButton} onClick={onClose}>
          Ok
        </div>
      </div>
    </div>
  );
};

export { SettingsModal };
