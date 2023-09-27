import styles from './index.module.scss';

export const FinanceCard = ({ value, removeValue }) => {
  return (
    <>
      <li
        className={
          value.type === 'credit'
            ? `${styles.card__container} ${styles.credit}`
            : `${styles.card__container} ${styles.debit}`
        }
      >
        <div className={styles.description__container}>
          <h3 className="title-3">{value.title}</h3>
          <small className="text-r">
            {value.type === 'credit' ? 'Entrada' : 'Saída'}
          </small>
        </div>
        <div className={styles.value__container}>
          <p className="head-line">
            {value.value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <button onClick={() => removeValue(value.id)} className="text-r">
            Excluir
          </button>
        </div>
      </li>
    </>
  );
};
