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
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Text:</label>
            <input 
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Enter text...'
            />
        </div>  
        <div>
          <label>Amount:</label>
            <input 
              type='text'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder='Enter amount...'
            />
        </div>   
        <button className="border">Add transaction</button>
      </form>
    </div>
  )
}
export default AddTransaction;