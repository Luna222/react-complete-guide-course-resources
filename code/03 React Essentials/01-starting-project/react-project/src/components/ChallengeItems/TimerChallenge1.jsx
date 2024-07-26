import { useState, useRef } from 'react';
import styles from '../../pages/Challenges/Challenges.module.css';
import ResultModal from './ResultModal';

//🌎 Global variables/scope that will be SHARED across all Component Instances & only be executed❗️ONCE
// let timer;

export default function TimerChallenge1({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef(); //👉 store setInterval ID
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // console.log(timeRemaining);

  //🚩 when the Timer is expired:
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    //reset timeRemaining
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    //👉 timerHandler will be executed after EVERY 10 milliseconds & the timeRemaining will get updated accordingly (reduce by 10ms each time)
    timer.current = setInterval(() => {
      setTimeRemaining(pendingTimerRemaining => pendingTimerRemaining - 10);
    }, 10);
  }

  //🚩 manually stop the Timer:
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    // <Fragment/> ~ <></>
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className={styles.challenge}>
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className={styles['challenge-time']}>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? styles.active : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
