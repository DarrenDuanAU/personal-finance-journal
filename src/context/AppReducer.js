export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      console.log("trigger")
      console.log(state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      ))
      return {
        //keep the rest of the state
        ...state,
        //only change the transaction
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      };
    case "ADD_TRANSACTION":
      // console.log("trigger")
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
}