import './App.css';
import {Header} from './components/Header';
import Balance from './components/Balance';
import IncomExpenses from './components/IncomExpenses'
import Transactionlist from './components/Transactionlist'
import AddTransactions from './components/AddTransactions'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider >
    
      <Header />
      <div className="container">
       <Balance />
       <IncomExpenses />
       <Transactionlist />
       <AddTransactions />
      </div>
    
    </GlobalProvider>
  );
}

export default App;
