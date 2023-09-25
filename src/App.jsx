import { FinanceList } from './components/Finance-List';
import { AppFinanceForm } from './components/Form';
import { AppHeader } from './components/Header';
import { TotalValues } from './components/Total';
import "./styles/index.scss"

const App = () => {
  return (
    <>
      <AppHeader />
      <AppFinanceForm />
      <TotalValues />
      <FinanceList />
    </>
  );
};

export default App;
