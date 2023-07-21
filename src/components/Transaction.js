import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({
  transaction
}) => {
  const sign = transaction.amount >= 0 ? '+':'-'
  const { deleteTransaction } = useContext(GlobalContext)
  
  return(
   <div className="flex">
    <button 
      className="px-2 bg-slate-400 my-1"
      onClick={() => deleteTransaction(transaction.id)}
    > X </button>
  <li className={( sign == '-'? "border-red-500 " :"border-green-500 " ) + "bg-white flex flex-row w-full justify-between items-center p-1 m-1 border-r-4 shadow-md"}>
      <div >
        {transaction.text}
      </div>
      <div>
        {sign}${Math.abs(transaction.amount)}
      </div>
   </li>
   </div> 
   
  )
}
export default Transaction;