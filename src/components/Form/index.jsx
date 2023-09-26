import styles from './index.module.scss';
import { useState } from 'react';
import { FormInput } from './inputs/index';

export const AppFinanceForm = () => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [typeOfValue, setTypeOfValue] = useState('credit');

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ description, value, typeOfValue });
    setDescription('');
    setValue('');
    setTypeOfValue('');
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
              setValue={setDescription}
            />
            <small className="text-r">Ex: compra de roupas</small>
            <FormInput
              label="Descrição"
              id="value"
              type="number"
              placeholder="Digite um valor..."
              value={value}
              setValue={setValue}
            />
            <label htmlFor="typeOfValue" className="text-r">
              Tipo de valor
            </label>
            <select
              name="typeOfValue"
              id="typeOfValue"
              value={typeOfValue}
              onChange={(e) => setTypeOfValue(e.target.value)}
            >
              <option value="credit">Entrada</option>
              <option value="debit">Saida</option>
            </select>
            <button className="head-line" type="submit">
              Inserir valor
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
