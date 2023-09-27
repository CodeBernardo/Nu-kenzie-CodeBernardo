import { FinanceCard } from './Finance-Card';
import styles from './index.module.scss';

export const FinanceList = ({ valuesList, removeValue }) => {
  return (
    <section className={styles.balance__section}>
      <div className={styles.balance__container}>
        <h2 className="title-3">Resumo financeiro</h2>
        <ul>
          {valuesList.map((value) => {
            return (
              <FinanceCard
                key={value.id}
                value={value}
                removeValue={removeValue}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
