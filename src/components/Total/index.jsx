import styles from './index.module.scss';

export const TotalValues = () => {
  return (
    <>
      <section className={styles.totalValue__section}>
        <div className={styles.totalValue__container}>
          <div className={styles.totalValue__display}>
            <h3 className="title-3">Valor total:</h3>
            <span className="title-3">R$ 8184,00</span>
          </div>
          <small className="text-r">O valor se refere ao saldo</small>
        </div>
      </section>
    </>
  );
};
