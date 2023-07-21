import { useContext, useEffect, useState } from "react";
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const [balance, setBalance] = useState(0);

  useEffect(()=>{
    console.log('transactions',transactions)
    const amounts = transactions.map((transaction) => transaction.amount)
    console.log('amounts', amounts)
    const totalAmount = amounts
      .reduce((acc,item) => (acc + item), 0)
      .toFixed(2);
      console.log("totalAmount",totalAmount)
      setBalance(totalAmount)
  },[transactions])

  return(
    <div>
      <h4 className="text-sm font-medium mb-2">YOUR BALANCE</h4>
      <h2 className='text-2xl font-medium' id='balance'>${balance}</h2>
    </div>
  )
}
export default Balance;