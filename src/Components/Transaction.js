import React, { useContext } from 'react';
import {GlobalContext} from '../contex/GlobalState';



export const Transaction = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const currentDate = new Date()

    return (
        <div>
            <li className={transaction.amount > 0? "item-plus": "item-minus"}>
            {transaction.text}<small>{transaction.amount>0? "Income added on ": "Expense added on "}{currentDate.toLocaleString()}</small>
                <span>SAR {transaction.amount}</span>
                <button onClick={() => deleteTransaction(transaction.id)}>X</button>
            </li>
        </div>
    )
}





// import React, { useContext } from 'react';
// import { GlobalContext } from '../contex/GlobalState';



// function Transaction() {
//     const { Transaction } = useContext(GlobalContext);
    
    
    
//     return  <div>
//         {/* <li className={0 > 0? "item-plus": "item-minus"}> */}

       

//             <li className="item-plus">
//             {/* {transaction.text}<small>{transaction.amount>0? "Income added on ": "Expense added on "}{currentDate.toLocaleString()}</small> */}
//                 A <small>Income added </small> 
//                 <span>SAR 1000</span>
//                 <button onClick={() => 1}>X</button>
//             </li>

            
//         </div>
// }

// export default Transaction;