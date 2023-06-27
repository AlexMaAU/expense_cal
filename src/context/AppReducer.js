// 把reducer单独设置为一个文件
// reducer 就是把每个state的所有state更新操作都放在一起，实现就近维护原则
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state, //解构出state
        transactions: state.transactions.filter(
          //用新的transactions覆盖state中的transactions
          (transaction) => {
            return transaction.id !== action.payload;
          }
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
