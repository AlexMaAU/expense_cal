import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
    transactions: [
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Salary', amount:1000},
        {id:3, text:'Book', amount:-10},
    ]
}

// create context
// 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
// 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。这有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    // actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}