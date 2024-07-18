//💚 use [⭐️forwardRef] API function to FORWARD ✨ref pointer from Component Instance in Parent Component to Component Blueprint
import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from '../../pages/Challenges/Challenges.module.css';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialogRef = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  //remainingTime is in milliseconds
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // console.log(userLost && <h2>You Lost</h2>); //false

  /* 
  💚 use [⭐️ useImperativeHandle(ref, createHandle, dependencies?)] Hook
  to EXPOSE custom `✨refHandle — can be of any data type` to the parent component 
  (🙅❗️not expose the entire DOM Node/Element)
  */
  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialogRef.current.showModal();
        },
      };
    },
    []
  );

  return (
    /*
    <dialog></dialog> built-in Element is invisible by default
    --> 👍 add 'open' attribute to it to make it visible, 🙅‍♀️ but WITHOUT backdrop
    */

    /*
    To make sure that onReset gets triggered when the dialog is closed via the escape key, you should add the [built-in ✨onClose prop] to the <dialog> element and bind it to the onReset prop
    */
    <dialog
      ref={dialogRef}
      className={styles['result-modal']}
      onClose={onReset}
    >
      {/* if user lose */}
      {userLost && <h2>You lost</h2>}

      {/* if user won */}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
