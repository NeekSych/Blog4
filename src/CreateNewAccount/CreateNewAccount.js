/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styles from './CreateNewAccount.module.css';

function CreateNewAccount() {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalTitle}>Create new account </div>

        <label className={styles.inputLabel}>Username:</label>
        <input type="text" className={styles.inputField} placeholder="Username" />

        <label className={styles.inputLabel}>Email:</label>
        <input type="email" className={styles.inputField} placeholder="Email adress" />

        <label className={styles.inputLabel}>Password:</label>
        <input type="password" className={styles.inputField} placeholder="Password" />

        <label className={styles.inputLabel}>Confirm Password:</label>
        <input type="password" className={styles.inputField} placeholder="Password" />

        <div className={styles.checkboxContainer}>
          <input type="checkbox" />
          <span className={styles.checkboxLabel}>
            I agree to the processing of my personal
            information

          </span>
        </div>

        <button
          type="button"
          className={styles.submitButton}
        >
          Create

        </button>
        <p className={styles.description}>
          Already have an acount?
          <a href="/sred">Sign in.</a>
        </p>
      </div>
    </div>
  );
}

export default CreateNewAccount;
