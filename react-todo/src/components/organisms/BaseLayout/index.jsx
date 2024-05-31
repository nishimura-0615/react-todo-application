import styles from './styles.module.css';
import { Navigation } from '../../molecules/Navigation';

export const BaseLayout = ({ children, title }) => (
  <div className={styles.container}>
    <section className={styles.common}>
      <Navigation />
    </section>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </div>
);
