import { useState } from 'react';
import styles from './AuthInputs.module.css'; //👉 Import css modules stylesheet as styles
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import cityImg from '../../assets/city.png';

const Article = function () {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden tablet:max-w-2xl font-sans">
      <div className="tablet:flex">
        <div className="tablet:shrink-0">
          <img
            className="h-48 w-full object-cover tablet:h-full tablet:w-48"
            src={cityImg}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8 text-center tablet:text-left">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Company retreats
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
          <button className="mt-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AuthInputsCssModules() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //⭐️
  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className={styles['page-wrapper-auth']}>
      <AuthHeader />
      <main className="mb-12">
        <div id={styles['auth-inputs']}>
          <div className={styles.controls}>
            <p>
              <label>Email</label>
              {/* 👉 Dynamic & Conditional Inline Styles */}
              <input
                type="email"
                className={emailNotValid ? styles.invalid : undefined}
                onChange={event =>
                  handleInputChange('email', event.target.value)
                }
              />
            </p>
            <p>
              <label>Password</label>
              {/* ❗️Boolean is an invalid data type to className, use 'undefined' instead */}
              <input
                type="password"
                className={passwordNotValid ? styles.invalid : undefined}
                onChange={event =>
                  handleInputChange('password', event.target.value)
                }
              />
            </p>
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles['text-button']}>
              Create a new account
            </button>
            <button className={styles.button} onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </main>
      <Article />
    </div>
  );
}
