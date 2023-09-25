export const AppFinanceForm = () => {
  return (
    <>
      <section>
        <fieldset>
          <form action="">
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Digite aqui sua descrição"
            />
            <small>Ex: compra de roupas</small>
            <label htmlFor="value">Valor (R$)</label>
            <input type="number" name="value" id="value" placeholder="1" />
            <label htmlFor="typeOfValue">Tipo de valor</label>
            <select name="typeOfValue" id="typeOfValue">
              <option defaultValue>
                Selecione o tipo
              </option>
              <option value="credit">Entrada</option>
              <option value="debit">Saida</option>
            </select>
            <button>Inserir valor</button>
          </form>
        </fieldset>
      </section>
    </>
  );
};
