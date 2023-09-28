import styles from './index.module.scss';
import { useState } from 'react';
import { FormInput, FormSelect } from './inputs/index';

export const AppFinanceForm = ({ addValue }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [typeOfValue, setTypeOfValue] = useState('credit');

  const submitForm = (e) => {
    e.preventDefault();
    addValue(description, amount, typeOfValue);
    setDescription('');
    setAmount('');
  };

  return (
    <>
      <section className={styles.form__section}>
        <div className={styles.form__container}>
          <form onSubmit={submitForm}>
            <FormInput
              label="Descrição"
              id="description"
              type="text"
              placeholder="Digite aqui sua descrição..."
              value={description}
              handleOnChange={setDescription}
            />
            <small className="text-r">Ex: compra de roupas</small>
            <FormInput
              label="Valor (R$)"
              id="value"
              type="number"
              placeholder="Digite um valor..."
              value={amount}
              handleOnChange={setAmount}
            />
            <FormSelect
              label="Tipo de valor"
              name="typeOfValue"
              id="typeOfValue"
              value={typeOfValue}
              handleOnChange={setTypeOfValue}
            >
              <option value="credit">Entrada</option>
              <option value="debit">Saida</option>
            </FormSelect>
            <button className="head-line" type="submit">
              Inserir valor
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
