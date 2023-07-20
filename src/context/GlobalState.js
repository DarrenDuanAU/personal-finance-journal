import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  transactions: [
    {id:1, text:'Flower', amount: -20},
    {id:2, text:'Salary', amount: 1000},
    {id:3, text:'Book', amount: -10}
  ]
}

//Create context
export const GlobalContext = createContext(initialState)


//Provider Component 
export const GlobalProvider = ({children}) => {
  // like useState: the state is  sotred current state, dispatch is like
  // mid-man to pass the parameter to the multi-function setState (the reducer)
  // (here is AppReducer).
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Actions
  function deleteTransaction(id){
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
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}