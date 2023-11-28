/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './SignIn.module.css';

function SignIn() {
  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
      </form>

      <p className={styles.signUpMessage}>Dont have an account? Sign up</p>
    </div>
  );
}

export default SignIn;
