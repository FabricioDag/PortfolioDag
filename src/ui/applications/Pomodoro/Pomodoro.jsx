import style from './Pomodoro.module.css';
import { useState, useEffect, useRef,useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';

import { PomodoroModal } from '../../components';

const Pomodoro = () => {
  const { t } = useContext(LanguageContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [workTime, setWorkTime] = useState(
    () => Number(localStorage.getItem('workTime')) || 1500
  );
  const [shortBreakTime, setShortBreakTime] = useState(
    () => Number(localStorage.getItem('shortBreakTime')) || 300
  );
  const [longBreakTime, setLongBreakTime] = useState(
    () => Number(localStorage.getItem('longBreakTime')) || 900
  );
  const [cyclesBeforeLongBreak, setCyclesBeforeLongBreak] = useState(
    () => Number(localStorage.getItem('cyclesBeforeLongBreak')) || 4
  );

  const [time, setTime] = useState(workTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  const [currentTimer, setCurrentTimer] = useState('work');

  // Refs para acessar os valores dos inputs diretamente
  const workTimeRef = useRef();
  const shortBreakTimeRef = useRef();
  const longBreakTimeRef = useRef();
  const cyclesBeforeLongBreakRef = useRef();

  // Função pega valor do localStorage

  // Salvando as configurações no localStorage
  useEffect(() => {
    localStorage.setItem('workTime', workTime);
    localStorage.setItem('shortBreakTime', shortBreakTime);
    localStorage.setItem('longBreakTime', longBreakTime);
    localStorage.setItem('cyclesBeforeLongBreak', cyclesBeforeLongBreak);
  }, [workTime, shortBreakTime, longBreakTime, cyclesBeforeLongBreak]);

  // Formatação do tempo
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    //return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    return `${minutes < 10 ? '0' + minutes : minutes}:${
      remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds
    }`;
  };

  // Reseta o timer
  const resetTimer = () => {
    setIsTimerRunning(false);
    //gerenciar qual o timer que estava antes do reset
    currentTimer == 'work'
      ? setTime(workTime)
      : currentTimer == 'shortBreak'
      ? setTime(shortBreakTime)
      : setTime(longBreakTime);
  };

  const nextTimer = () => {
    setIsTimerRunning(false);
    //gerenciar qual o proximo timer
    if (currentTimer !== 'work') {
      setCurrentTimer('work');
      setTime(workTime);

      setCycleCount((prev) => prev + 1); //counter ciclos ++
    } else if (currentTimer == 'work' && cycleCount < cyclesBeforeLongBreak) {
      setCurrentTimer('shortBreak');
      setTime(shortBreakTime);
    } else {
      setCurrentTimer('longBreak');
      setTime(longBreakTime);
      setCycleCount(-1); //gambiarra pra depois do longbreak o counter estar em 0
    }
  };

  // Controla o efeito do tempo
  useEffect(() => {
    let interval;
    if (isTimerRunning && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1);

      // ciclo termina dps de um intervalo
    } else if (time === 0) {
      nextTimer();
      //resetTimer()
    }
    return () => clearInterval(interval);
  }, [
    isTimerRunning,
    time,
    currentTimer,
    cycleCount,
    cyclesBeforeLongBreak,
    workTime,
    shortBreakTime,
    longBreakTime,
  ]);

  const handleClick = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  // Função para aplicar os valores ao clicar no botão "Apply"
  const applySettings = () => {
    alert('Applied ');
    setWorkTime(Number(workTimeRef.current.value) * 60);
    // alert('worktime ' + Number(workTimeRef.current.value) * 60);

    setShortBreakTime(Number(shortBreakTimeRef.current.value) * 60);
    // alert('sBreak ' + Number(shortBreakTimeRef.current.value) * 60);

    setLongBreakTime(Number(longBreakTimeRef.current.value) * 60);
    // alert('lBreak ' + Number(longBreakTimeRef.current.value) * 60);

    setCyclesBeforeLongBreak(Number(cyclesBeforeLongBreakRef.current.value));
    resetTimer(); // Reseta o timer com os novos valores
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={`${style.Pomodoro} application `}>
      <div className={style.topPart}>
        <h3>Pomodoro</h3>
        {/* <p>
          currentTimer: {currentTimer} currentCycle: {cycleCount}
        </p> */}

        <div className={style.actualTimer}>
          <p className={`${currentTimer == 'work' ? style.actual : ''}`}>
            Pomodoro
          </p>
          <p className={`${currentTimer == 'shortBreak' ? style.actual : ''}`}>
           {t('shortBreak')}
          </p>
          <p className={`${currentTimer == 'longBreak' ? style.actual : ''}`}>
            {t('longBreak')}
          </p>
        </div>
      </div>

      <div className={style.timerWrapper} onClick={handleClick}>
        <div className={style.circle}>
          <div className={style.timer}>
            <h1 className={style.timerValue}>{formatTime(time)}</h1>
            <p className={style.timerAction}>
              {isTimerRunning ? 'PAUSE' : 'PLAY'}
            </p>
          </div>
        </div>

        <div className={style.nextTimer}>
          <p>{`${
            currentTimer !== 'work'
              ? workTime / 60
              : cycleCount < cyclesBeforeLongBreak
              ? shortBreakTime / 60
              : longBreakTime / 60
          }`}</p>
        </div>
      </div>

      <button className={style.configButton} onClick={() => handleOpenModal()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
          />
        </svg>
      </button>

      {/* ---------------- INICIO MODAL ----------------- */}

      <PomodoroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{t('time')}</p>

        <div className={style.inputWrapper}>
          <label htmlFor="pomodoroInput">Pomodoro</label>
          <input type="number" defaultValue={workTime / 60} ref={workTimeRef} />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="pomodoroInput">{t('shortBreak')}</label>
          <input
            type="number"
            defaultValue={shortBreakTime / 60}
            ref={shortBreakTimeRef}
          />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="pomodoroInput">{t('longBreak')}</label>
          <input
            type="number"
            defaultValue={longBreakTime / 60}
            ref={longBreakTimeRef}
          />
        </div>

        <div className={style.inputWrapper}>
          <label htmlFor="pomodoroInput">{t('cyclesToLongBreak')}</label>
          <input
            type="number"
            defaultValue={cyclesBeforeLongBreak}
            ref={cyclesBeforeLongBreakRef}
          />
        </div>

        <button className={style.applyButton} onClick={applySettings}>
          {t('apply')}
        </button>
      </PomodoroModal>
    </div>
  );
};

export { Pomodoro };
