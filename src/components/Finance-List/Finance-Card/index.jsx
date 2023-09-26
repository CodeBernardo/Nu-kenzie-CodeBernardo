import styles from './index.module.scss';

export const FinanceCard = () => {
  return (
    <>
      <li className={styles.card__container}>
        <div className={styles.description__container}>
          <h3 className="title-3">Salário - Mês Dezembro</h3>
          <small className="text-r">Entrada</small>
        </div>
        <div className={styles.value__container}>
          <p className="head-line">R$ 6.660,00</p>
          <button className="text-r">Excluir</button>
        </div>
      </li>
    </>
  );
};
