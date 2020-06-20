import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    //   transactions: [
    //             {ID: 1, text: "f-Income", amount: 1},
    //             {ID: 2, text: "f-Expense", amount: -2},
    //             {ID: 3, text: "f-Income", amount: 3}
    //         ]
    transactions: []
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addIncome(transaction){
        dispatch({
            type: "ADD_INCOME",
            payload: transaction
        })
    }

    function addExpense(transaction){
        dispatch({
            type: "ADD_EXPENSE",
            payload: transaction
        })
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addIncome,
            addExpense
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// import React, { createContext, useReducer } from 'react'
// import AppReducer from './AppReducer'


// // create initial status 
// const initialState  = {
//     transactions: [
//         {ID: 1, Desc: "f-Income", Amt: 1},
//         {ID: 2, Desc: "f-Expense", Amt: -2},
//         {ID: 3, Desc: "f-Income", Amt: 3}
//     ]
// }

// export const GlobalContext = createContext(initialState)

// export const GlobalProvider = ({children}) => {
//     const [state, dispatch ] = useReducer(AppReducer, initialState)

//     return (
//         <GlobalContext.Provider value={
//             {
//                 transactions: state.transactions
//             }
//         }> 
//         {children}
//         </GlobalContext.Provider>
//     )

// }





// edit

// import React, { createContext, useReducer } from 'react'
// import AppReducer from './AppReducer'

// const initialState = {
//       transactions: [
//                 {ID: 1, Desc: "f-Income", Amt: 1},
//                 {ID: 2, Desc: "f-Expense", Amt: -2},
//                 {ID: 3, Desc: "f-Income", Amt: 3}
//             ]
// }

// export const GlobalContext = createContext(initialState)

// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState)
    
//     return (
//         <GlobalContext.Provider value={
//             {
//             transactions: state.transactions
//             }
//         }>
//         {children}
//         </GlobalContext.Provider>
//     )
// }