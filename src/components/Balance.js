import { useContext, useEffect, useState } from "react"
import {GlobalContext} from '../context/GlobalState'

export const Balance = ()=>{
    // 使用React.createContext创建一个上下文对象，并使用Provider组件将共享的数据传递给后代组件。
    // 然后可以在子组件中使用useContext钩子获取context的值 - 针对需要使用useContext的值进行逻辑运算
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
            {/* 也可以通过 context consumer 消费Provider中的value - 适用于直接渲染context的值 */}
            {/* <GlobalContext.Consumer>
                {value=><div>{value.transactions}</div>}
            </GlobalContext.Consumer> */}
        </>
    )
}