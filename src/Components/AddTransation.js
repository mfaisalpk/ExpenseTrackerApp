import React, { useState, useContext } from 'react'
import {GlobalContext} from '../contex/GlobalState'


export const AddTransation = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    
    const {addIncome, addExpense} = useContext(GlobalContext)

    // const onSubmit = e => {
    //     e.preventDefault()
    //     document.getElementById("text").value = ""
    //     document.getElementById("amount").value = 0
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            text,
            amount: +amount
        }
        
        if (document.getElementById("amount").value < 0)         
            {
                addExpense(newTransaction);
            }           
                else  
            {
                addIncome(newTransaction);
            }      
        
        
        
            
    }
    

    const income = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: +amount
    }

    const expense = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: -amount
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                
                <br/>
                <label className="text" htmlFor="text">Description</label>
                <input id="text" type="text" required="required" value={text} onChange={(e) => setText(e.target.value)}/>
               
                <label className="amount" htmlFor="amount">Amount (Income/Expense)</label>
                <input id="amount" type="number" required="required" value={amount} onChange={(e) => setAmount(e.target.value)} />
               
                {/* <button onClick={() => addIncome(income)}>Income</button>
                <button onClick={() => addExpense(expense)}>Expense</button> */}
              
                
                        
                <button className="btn">Add Transaction</button>
                

            </form>
        </div>

        // <div>
        //     <h3>Add New Transaction</h3>
        //     <form onSubmit={onSubmit}>
        //         <div className="form-control">
        //             <label htmlFor="description">
        //                 Description
        //             </label>
        //             <input  type="text" 
        //                     id="text"
        //                     value={text}
        //                     onChange={(e) => setText(e.target.value)}
        //                     placeholder="Detail of Transaction" 
        //                     required="required"
        //             />
        //         </div>
        //         <div className="form-control">
        //             <label htmlFor="transactionamount">
        //                 Transaction Amount
        //             </label>
        //             <input  type="number" 
        //                     id="amount"
        //                     value={amount}
        //                     onChange={(e) => setAmount(e.target.value)}
        //                     placeholder="Dollar Value of Transaction"
        //                     required="required"
        //             />
        //         </div>
        //         <button className="btn">Add Transaction</button>
        //     </form>
        // </div>

    )
}
