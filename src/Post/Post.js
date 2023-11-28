import React from 'react';
import styles from './Post.module.css';

function PostCard() {
  return (
    <div className={styles.postCard}>
      <div className={styles.leftSection}>
        <h2>Заголовок поста</h2>
        <div className={styles.likes}>
          <span className={styles.likeIcon}>❤</span>
          <span className={styles.likeCount}>100</span>
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>#tag1</span>
          <span className={styles.tag}>#tag2</span>
        </div>
        <p className={styles.description}>Описание поста здесь...</p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.userInfo}>
          <h3>Имя Фамилия</h3>
          <p className={styles.date}>Дата поста</p>
          <img src="avatar.jpg" alt="Аватар пользователя" className={styles.avatar} />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
