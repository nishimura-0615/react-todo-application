import { FC } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type Props = {
  title: string;
  linkPath: string;
};

export const NavigationLink: FC<Props> = ({ title, linkPath }) => (
  <li className={styles.li}>
    <Link href={linkPath}>{title}</Link>
  </li>
);
