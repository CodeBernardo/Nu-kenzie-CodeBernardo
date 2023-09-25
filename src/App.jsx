import { AppFinanceForm } from './components/Form';
import { AppHeader } from './components/Header';
import { TotalValues } from './components/Total';

const App = () => {
  return (
    <>
      <AppHeader />
      <AppFinanceForm />
      <TotalValues/> 
    </>
  );
};

export default App;
