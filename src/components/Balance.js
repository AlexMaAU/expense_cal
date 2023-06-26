import { useContext, useEffect, useState } from "react"
import {GlobalContext} from '../context/GlobalState'

export const Balance = ()=>{
    const {transactions} = useContext(GlobalContext)
    const [balance, setBalance] = useState(0)

    useEffect(()=>{
        const amounts = transactions.map((transaction)=>transaction.amount)
        console.log('amounts', amounts)
        const totalAmounts = amounts.reduce((acc,item)=>(acc += item), 0).toFixed(2)
        console.log('totalAmounts', totalAmounts)
        setBalance(totalAmounts)
    }, [transactions])

    return (
        <>
            <h4>Your Balance</h4>
            <h2 id='balance'>${balance}</h2>
        </>
    )
}