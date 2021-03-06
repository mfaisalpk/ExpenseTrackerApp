import React, { useContext } from 'react'
import {GlobalContext} from '../contex/GlobalState'
import CountUp from 'react-countup'


function Balance() {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((acc, item) => (acc+=item), 0).toFixed(2)

    return <div className="balance">
            <h3>Your Balance</h3>
            <h1><CountUp delay={2} start={0} end={total}/></h1>
            {/* <CountUp delay={2} start={0} end={100} /> */}
            {/* <h1>SAR  {total} </h1> */}
        </div>
}

export default Balance;

