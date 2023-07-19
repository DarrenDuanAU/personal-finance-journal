const Transaction = ({
  transaction
}) => {
  const sign = transaction.amount >= 0 ? '+':'-'
  return(
   <li className="flex">
    <div>
      {transaction.text}
    </div>
    <div>
      {sign}${Math.abs(transaction.amount)}
    </div>
   </li>
  )
}
export default Transaction;