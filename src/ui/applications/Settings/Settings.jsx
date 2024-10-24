import { useState, useContext } from 'react';
import style from './Settings.module.css'
import { SettingsModal } from '../../components';

import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';

const Settings = ({
  setTheme,
  // changeLanguage,
  // setBackground,
  // setTimestamp,
  setOpenedApp,
}) => {
  const { t, setLanguage } = useContext(LanguageContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeArray, setActiveArray] = useState([]);
  const [activeFunction, setActiveFunction] = useState(null);

  // const [selectedBackground, setSelectedBackground] = useState('Clean');
  // const [selectedLanguage, setSelectedLanguage] = useState('en');
  // const [selectedTimestamp, setSelectedTimestamp] = useState('00');
  // const [selectedTheme, setSelectedTheme] = useState('Standard');

  const Backgrounds = ['Clean', 'Stamped'];
  const Themes = ['Dark', 'Standard', 'Light'];
  const Languages = ['pt', 'en', 'es'];
  const TimeStamp = ['00', '01', '02'];

  const handleOpenModal = (arr, func) => {
    setActiveArray(arr);
    setIsModalOpen(true);

    switch (func) {
      case 'setTheme':
        setActiveFunction(() => setTheme);
        break;
      case 'changeLanguage':
        setActiveFunction(() => setLanguage);
        break;
      // case 'setBackground':
      //   setActiveFunction(() => setBackground);
      //   break;
      // case 'setTimestamp':
      //   setActiveFunction(() => setTimestamp);
      //   break;
    }
  };

  return (
    <div className={`${style.Settings} application`}>
      <h1>{t('settings')}</h1>

      <div className={style.settingsWrapper}>
        <div className={style.settingOption} onClick={() => setOpenedApp('About')}>
          <div className={style.settingText}>
            <p className={style.settingTitle}>{t('about')}</p>
          </div>
          <hr />
        </div>

        {/* <div
          className="settingOption"
          onClick={() => handleOpenModal(Backgrounds, 'setBackground')}
        >
          <div className="settingText">
            <p className="settingTitle">{t('background')}</p>
            <small className="settingActual">{selectedBackground}</small>
          </div>
          <hr />
        </div> */}

        <div
          className={style.settingOption}
          onClick={() => handleOpenModal(Languages, 'changeLanguage')}
        >
          <div className={style.settingText}>
            <p className={style.settingTitle}>{t('language')}</p>
            <small className={style.settingActual}>{t('actualLanguage')}</small>
          </div>
          <hr />
        </div>

        {/* <div
          className="settingOption"
          onClick={() => handleOpenModal(TimeStamp, 'setTimestamp')}
        >
          <div className="settingText">
            <p className="settingTitle">Time Stamp</p>
            <small className="settingActual">{selectedTimestamp}</small>
          </div>
          <hr />
        </div> */}

        <div
          className={style.settingOption}
          onClick={() => handleOpenModal(Themes, 'setTheme')}
        >
          <div className={style.settingText}>
            <p className={style.settingTitle}>{t('theme')}</p>
            {/* <small className="settingActual">{selectedTheme}</small> */}
          </div>
          <hr />
        </div>
      </div>

      <h2 className={style.feedbackButton} onClick={() => setOpenedApp('Contact')}>{t('feedback')}</h2>

      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('select')}
      >
        {activeArray.map((item, index) => (
          <div
            key={index}
            className="modalItem"
            onClick={() => {
              activeFunction(item);
              // alert(item);
            }}
          >
            {item}
          </div>
        ))}
      </SettingsModal>
    </div>
  );
};

export { Settings };
