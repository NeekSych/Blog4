import React from 'react';
import { Button } from 'antd';
import styles from './Header.module.css';

function Header() {
  const isLogged = true;
  return (
    <header className={styles.header}>
      <div className={styles.companyName}>Realworld blog</div>
      {isLogged
        ? (
          <div className={styles.userSection}>
            <Button
              className={styles.actionButton}
            >
              Create Article
            </Button>
            <div className={styles.userInfo}>
              <div className={styles.userName}>John Doe</div>
              <img
                className={styles.avatar}
                src="путь_к_вашему_изображению"
                alt="Аватар пользователя"
              />
            </div>
            <Button
              text
              className={styles.actionButton}
            >
              Log Out

            </Button>
          </div>
        )
        : (
          <div>
            <Button
              type="text"
              className={styles.actionButton}
            >
              Sign in
            </Button>
            <Button
              text
              className={styles.actionButton}
            >
              Sign Up

            </Button>
          </div>
        )}
    </header>
  );
}

export default Header;
