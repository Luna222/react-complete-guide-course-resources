import logo from '../assets/logo.png';
import styles from '../pages/AuthInputs/AuthInputs.module.css';

export default function AuthHeader() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 className={styles['header-h1']}>ReactArt</h1>
      <p className={styles['header-p']}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
