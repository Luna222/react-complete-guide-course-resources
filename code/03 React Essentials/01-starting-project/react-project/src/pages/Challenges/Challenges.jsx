import Player from '../../components/ChallengeItems/Player.jsx';
import TimerChallenge1 from '../../components/ChallengeItems/TimerChallenge1.jsx';
import styles from './Challenges.module.css';

function Challenges() {
  return (
    <div className={`page-wrapper ${styles['page-wrapper-challenges']}`}>
      <div id={styles.content}>
        <header>
          <h1>
            The <em>Almost</em> Final Countdown
          </h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>

        <div>
          <Player />
          <div id={styles.challenges}>
            {/* targetTime in seconds */}
            <TimerChallenge1 title="Easy" targetTime={1} />
            <TimerChallenge1 title="Not easy" targetTime={5} />
            <TimerChallenge1 title="Getting tough" targetTime={10} />
            <TimerChallenge1 title="Pros only" targetTime={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
