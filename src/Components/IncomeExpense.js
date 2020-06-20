import React,  { useContext } from 'react';
import {GlobalContext} from '../contex/GlobalState';

const IncomeExpense = ()=> {

    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount)
    const income = amount.filter(item => item > 0).reduce((acc,item) => (acc+=item), 0).toFixed(2)
    const expense = (amount.filter(item => item < 0).reduce((acc,item) => (acc+=item), 0) * -1).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div className="inc-container">
                <h4>Income</h4>
                <p className="money plus">SAR {income}</p>
            </div>
            <div className="exp-container">
                <h4>Expense</h4>
                <p className="money minus">SAR {expense}</p>
            </div>
      </div>
  
    )
}

export default IncomeExpense;
