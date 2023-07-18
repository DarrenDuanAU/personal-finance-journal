export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        //keep the rest of the state
        ...state,
        //only change the transaction
        transation: state.transation.filter(
          (transation) => transation.id !== action.payload
        )
      }
    case "ADD_TRANSACTION":
      return {
        ...state,
        transation:[action.playload, ...state.transation]
      }
    default:
      return state;
  }
}