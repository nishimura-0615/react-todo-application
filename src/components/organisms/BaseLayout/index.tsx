import { FC, ReactNode } from 'react';
import styles from './styles.module.css';
import { Navigation } from '../../molecules/Navigation';

type Props = {
  children: ReactNode;
  title: string;
};

export const BaseLayout: FC<Props> = ({ children, title }) => (
  <div className={styles.container}>
    <section className={styles.common}>
      <Navigation />
    </section>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </div>
);
