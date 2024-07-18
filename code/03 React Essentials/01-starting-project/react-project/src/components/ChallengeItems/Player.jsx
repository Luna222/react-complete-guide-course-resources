import { useState, useRef } from 'react';
import styles from '../../pages/Challenges/Challenges.module.css';

export default function Player() {
  const playerNameRef = useRef(null);
  //⭐️ manage inputs with State
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(e) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // }

  function handleClick(e) {
    e.preventDefault();
    setEnteredPlayerName(playerNameRef.current.value);
    //clear inputs
    playerNameRef.current.value = '';

    // setSubmitted(true);
  }

  return (
    <section id={styles.player}>
      {/* <h2>Welcome {`${submitted ? enteredPlayerName : 'unknown entity'}`}</h2> */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        {/* 🔹Two-Way Binding --> 🙅‍♀️ no more needed */}
        <input
          ref={playerNameRef}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
