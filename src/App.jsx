import { useState } from 'react';
import { FinanceList } from './components/Finance-List';
import { AppFinanceForm } from './components/Form';
import { AppHeader } from './components/Header';
import { TotalValues } from './components/Total';
import './styles/index.scss';

const App = () => {
  const [valuesList, setValuesList] = useState([]);
  const addValue = (description, amount, typeOfValue) => {
    const newValue = {
      id: crypto.randomUUID(),
      title: description,
      value: Number(amount),
      type: typeOfValue,
    };
    setValuesList([...valuesList, newValue]);
  };

  const removeValue = () => {};

  return (
    <>
      <AppHeader />
      <main>
        <div className="aside__form">
          <AppFinanceForm addValue={addValue} />
          <TotalValues valuesList={valuesList} />
        </div>
        <FinanceList />
      </main>
    </>
  );
};

export default App;
