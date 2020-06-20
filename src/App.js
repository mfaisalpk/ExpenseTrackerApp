import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import { TransactionHistory }  from './Components/TransactionHistory';
import { AddTransation } from './Components/AddTransation';
import { GlobalProvider } from './contex/GlobalState';


function App() {
  return (  
    <GlobalProvider>
        <div>
          <Header/>
          <Balance/>
          <IncomeExpense/>
          <TransactionHistory/>
          <AddTransation/>
      </div>      
      </GlobalProvider>        
  );
}

export default App;
