import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({
  transaction
}) => {
  const sign = transaction.amount >= 0 ? '+':'-'
  const { deleteTransaction } = useContext(GlobalContext)
  
  return(
   <li className="flex">
    <div className="flex bg-red-400">
      <button 
        className="p-2 bg-slate-400 border rounded"
        onClick={() => deleteTransaction(transaction.id)}
      > X </button>
      <div>
        {transaction.id}
        {transaction.text}
      </div>
      <div>
        {sign}${Math.abs(transaction.amount)}
      </div>
    </div>
   </li>
  )
}
export default Transaction;