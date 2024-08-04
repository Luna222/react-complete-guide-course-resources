import { useEffect } from 'react';
import styles from '../../pages/PlacePicker/PlacePicker.module.css';

import ProgressBar from './ProgressBar.jsx';

const TIME_OUT = 3000; //in ms

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    //🔹asynchronous: running in the background, other codes get executed
    const timer = setTimeout(() => {
      console.log('TIMER SET');
      onConfirm();
    }, TIME_OUT);

    //🧹cleanUpFn
    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, [onConfirm]);
  //📌 in JS, Functions are also special Objects
  /*
  [😐 Problem introduced]: 
    can trigger an INFINITE LOOP as 'onConfirm' callbackFn dependency changed—re-defined by each re-render of PlacePicker parent Component IF this DeleteConfirmation Component wasn't removed from DOM Tree

    ===> 💚 You should use [⭐️ useCallback(setupFn, dependencies?)] Hook when passing a function value as a reactive value in dependencies array argument of useEffect Hook
  */

  return (
    <div id={styles['delete-confirmation']}>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id={styles['confirmation-actions']}>
        <button onClick={onCancel} className={styles['button-text']}>
          No
        </button>
        <button onClick={onConfirm} className={styles.button}>
          Yes
        </button>
      </div>
      <ProgressBar timeOut={TIME_OUT} />
    </div>
  );
}
