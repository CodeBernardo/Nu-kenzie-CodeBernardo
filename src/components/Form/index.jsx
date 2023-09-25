import styles from './index.module.scss';

export const AppFinanceForm = () => {
  return (
    <>
      <section className={styles.form__section}>
        <fieldset>
          <form action="" className={styles.form__container}>
            <label htmlFor="description" className="text-r">
              Descrição
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Digite aqui sua descrição"
              className="head-line"
            />
            <small className="text-r">Ex: compra de roupas</small>
            <label htmlFor="value" className="text-r">
              Valor (R$)
            </label>
            <input
              type="number"
              name="value"
              id="value"
              placeholder="1"
              className="head-line"
            />
            <label htmlFor="typeOfValue" className="text-r">
              Tipo de valor
            </label>
            <select name="typeOfValue" id="typeOfValue">
              <option value="credit">Entrada</option>
              <option value="debit">Saida</option>
            </select>
            <button className="head-line">Inserir valor</button>
          </form>
        </fieldset>
      </section>
    </>
  );
};
