import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const NavigationLink = ({ title = '', linkPath = '/' }) => (
  <li className={styles.li}>
    <Link to={linkPath}>{title}</Link>
  </li>
);
