import { FinanceCard } from './Finance-Card';
import styles from './index.module.scss';

export const FinanceList = () => {
  return (
    <section className={styles.balance__section}>
      <h2 className="title-3">Resumo financeiro</h2>
      <ul>
        <FinanceCard />
      </ul>
    </section>
  );
};
