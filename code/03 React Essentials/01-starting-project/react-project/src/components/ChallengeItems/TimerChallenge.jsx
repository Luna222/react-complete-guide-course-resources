import { useState, useRef } from 'react';
import styles from '../../pages/Challenges/Challenges.module.css';
import ResultModal from './ResultModal';

//🌎 Global variables/scope that will be SHARED across all Component Instances & only be executed❗️ONCE
// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef(); //👉 store timeout ID
  const dialog = useRef();

  function handleStart() {
    //👉 timerHandler will be executed after 'targetTime' seconds
    timer.current = setTimeout(() => {
      setTimerExpired(true);

      //--> ❗️now we detached the TimerChallenge Component from <dialog> Component in ResultModal Component
      dialog.current.open();
    }, targetTime * 1000);

    //👉 will be executed right after the timer was set
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    // <Fragment/> ~ <></>
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className={styles.challenge}>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className={styles['challenge-time']}>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? styles.active : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
