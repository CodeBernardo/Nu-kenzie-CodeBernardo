import styles from './index.module.scss';
// import { useState, useEffect } from 'react';

export const TotalValues = ({ valuesList }) => {
  const balance = valuesList.reduce(
    (acc, cur) =>
      cur.type === 'credit'
        ? acc + cur.value
        : cur.type === 'debit'
        ? acc - cur.value
        : acc,
    0
  );

  return (
    <>
      <section className={styles.totalValue__section}>
        <div className={styles.totalValue__container}>
          <div className={styles.totalValue__display}>
            <h3 className="title-3">Valor total:</h3>
            <span className="title-3">{balance.toLocaleString("pt-BR", {style:"currency", currency: "BRL"})}</span>
          </div>
          <small className="text-r">O valor se refere ao saldo</small>
        </div>
      </section>
    </>
  );
};
