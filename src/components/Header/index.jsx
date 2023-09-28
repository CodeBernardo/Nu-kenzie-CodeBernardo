import styles from './index.module.scss';
import logo from '../../assets/Nu Kenzie.png';

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.nu__logo} alt="Nu kenzie logo" />
    </header>
  );
};
