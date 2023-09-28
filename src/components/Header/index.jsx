import styles from './index.module.scss';

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={`title-2 ${styles.nu__logo}`}>
        <span>Nu</span> Kenzie
      </h1>
    </header>
  );
};
