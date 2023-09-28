import { useEffect, useState } from 'react';
import { FinanceList } from './components/Finance-List';
import { AppFinanceForm } from './components/Form';
import { AppHeader } from './components/Header';
import { TotalValues } from './components/Total';
import './styles/index.scss';

const App = () => {
  const auth = JSON.parse(localStorage.getItem('@nukenzie:valuesList'));
  const [valuesList, setValuesList] = useState(
    auth ? JSON.parse(localStorage.getItem('@nukenzie:valuesList')) : []
  );

  useEffect(() => {
    localStorage.setItem('@nukenzie:valuesList', JSON.stringify(valuesList));
  }, [valuesList]);

  const addValue = (description, amount, typeOfValue) => {
    const newValue = {
      id: crypto.randomUUID(),
      title: description,
      value: Number(amount),
      type: typeOfValue,
    };
    setValuesList([...valuesList, newValue]);
  };

  const removeValue = (id) => {
    const newValuesList = valuesList.filter((value) => value.id !== id);
    setValuesList(newValuesList);
  };

  return (
    <>
      <AppHeader />
      <main>
        <div className="aside__form">
          <AppFinanceForm addValue={addValue} />
          <TotalValues valuesList={valuesList} />
        </div>
        <FinanceList valuesList={valuesList} removeValue={removeValue} />
      </main>
    </>
  );
};

export default App;
