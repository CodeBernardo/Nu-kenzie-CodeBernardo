import { FinanceList } from './components/Finance-List';
import { AppFinanceForm } from './components/Form';
import { AppHeader } from './components/Header';
import { TotalValues } from './components/Total';
import "./styles/index.scss"

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
      <div>
        <AppFinanceForm />
        <TotalValues />
      </div>
      <FinanceList />
      </main>
    </>
  );
};

export default App;
