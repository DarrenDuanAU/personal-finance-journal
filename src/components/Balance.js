import { useContext, useEffect, useState } from "react";
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  // const [balance, setBalance] = useState(0);

  // useEffect(()=>{
  //   const amounts = transactions.map((transaction) => transaction.amounts)
  //   console.log('amounts', amounts)
  // },[])


  return(
    <div>
      Balance
    </div>
  )
}
export default Balance;