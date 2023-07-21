import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text, amount)
    
    const newTransaction = {
      id: Math.floor(Math.random()*1000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return(
    <div>
      <h3 className="border-b-2 mb-2 pb-2 font-medium">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col font-medium my-2">
          <label>Text:</label>
            <input 
              className="h-8 shadow-md px-2"
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Enter text...'
            />
        </div>  
        <div className="flex flex-col font-medium">
          <label>Amount:</label>
            <input 
              className="h-8 shadow-md px-2"
              type='text'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder='Enter amount...'
            />
        </div>   
        <button className="bg-purple-400 w-full h-9 shadow-md mt-5">Add transaction</button>
      </form>
    </div>
  )
}
export default AddTransaction;