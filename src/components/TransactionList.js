import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext) 
  
  return (
    <div>
      <h3 className="font-medium border-b-2 mb-3 pb-3">History</h3>
      <ul className="mb-3">
        { transactions.map((transaction)=>(
          <Transaction 
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </div>
  )
}
export default TransactionList;