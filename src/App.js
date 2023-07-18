import logo from './logo.svg';
import './style.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import IncomeExpenses from './components/IncomeExpenses';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
