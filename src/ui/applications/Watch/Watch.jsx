import './Watch.css';
import style from './Watch.module.css'
import { useState, useEffect } from 'react';

const Watch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const getMilliseconds = `00${time % 1000}`.slice(-3);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(minutes / 60)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return (
    <div className={`${style.Watch} application`}>
      <p className={style.timer}>{formatTime(time)}</p>
      <div className={style.timerButtons}>
        <button onClick={startStop} className={style.startStopButton}>
          {isRunning ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className={style.icon}
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className={style.icon}
            >
              <path
                fill="currentColor"
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              />
            </svg>
          )}
        </button>
        <button
          className={isRunning ? style.resetButton :  `${style.resetButton} ${style.active}`}
          onClick={reset}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className={style.icon}
          >
            <path
              fill="currentcolor"
              d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Watch };
