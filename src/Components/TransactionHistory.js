import React, {useContext} from 'react'
import {GlobalContext} from '../contex/GlobalState'
import { Transaction } from './Transaction'



export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext)

    return(
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )

}

//export default TransactionList;
// import React , { useContext } from 'react';
// import Transaction from './Transaction'
// import { GlobalContext } from '../contex/GlobalState';




// const TransactionList = () => (
   
    
//     <div className="history">
//         <h3>History</h3>
//         <div className="history-underline"></div>
//         <ul className="history-list">                                     
//             <Transaction/>
//         </ul>
//     </div>
    

// )

// export default TransactionList;