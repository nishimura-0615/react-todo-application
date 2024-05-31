import styles from './styles.module.css';
import { NAVIGATION_PATH } from '../../../constants/navigation';
import { NavigationLink } from '../../atoms/NavigationLink';

export const Navigation = () => (
  <nav>
    <ul className={styles.ul}>
      <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP} />
      <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE} />
    </ul>
  </nav>
);
