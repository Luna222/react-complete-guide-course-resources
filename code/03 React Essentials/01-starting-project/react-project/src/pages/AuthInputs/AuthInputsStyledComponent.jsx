import { useState } from 'react';
import AuthHeaderSC from '../../components/AuthHeader/AuthHeaderSC.jsx';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import styles from './AuthInputs.module.css'; //👉 Import css modules stylesheet as styles

import styled, { css } from 'styled-components';

/*
🌸 CSS Styling with “Styled Components” (3rd-party Package)
  👉 use ✨tagged template literal
  ==> Styled Components are now React components that you can use like any other React component

  📌 styled-components lets you write actual CSS in your JavaScript (CSS-in-JS)
*/
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

//------------------------

export default function AuthInputsStyledComponent() {
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
      <AuthHeaderSC />
      <main>
        <div id={styles['auth-inputs']}>
          <ControlContainer>
            <Input
              type="email"
              label="Email"
              invalid={emailNotValid}
              onChange={event => handleInputChange('email', event.target.value)}
            />
            <Input
              type="password"
              label="Password"
              invalid={passwordNotValid}
              onChange={event =>
                handleInputChange('password', event.target.value)
              }
            />
          </ControlContainer>
          <div className={styles.actions}>
            <button type="button" className={styles['text-button']}>
              Create a new account
            </button>
            <Button onClick={handleLogin}>Sign In</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
