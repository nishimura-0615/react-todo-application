import React from 'react';
import styles from './styles.module.css';

export const CommonButton = ({ type, title, onClick }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {title}
  </button>
);
