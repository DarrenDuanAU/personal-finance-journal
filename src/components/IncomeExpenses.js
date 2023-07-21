import { GlobalContext } from "../context/GlobalState";
import { useContext, useEffect, useState } from "react";
const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const [money, setMoney] = useState({
    income: 0,
    expense: 0
  })

  useEffect(() => {
    const amount = transactions.map((transaction) => transaction.amount)
    const income = amount
      .filter((item) => item >= 0 )
      .reduce((acc,item) => acc + item, 0)
      .toFixed(2)

    const expense = (amount
      .filter((item) => item <0 )
      .reduce((acc,item) => acc + item, 0) * -1)
      .toFixed(2)

    // console.log(income)
    // console.log(expense)
    setMoney({
      income: income,
      expense: expense
    })
  },[transactions])

  return(
    <div className="bg-white p-3 my-3 shadow-xl flex flex-row items-center justify-center" >
      <div className="text-center font-medium  px-6 py-3 border-r-2">
        <p>INCOME</p>
        <p className="text-xl text-green-500">${money.income}</p>
      </div>
      <div className=" text-center font-medium  px-6 py-3">
        <p>EXPENSE</p>
        <p className="text-xl text-red-500">${money.expense}</p>
      </div>
    </div>  
  )
}
export default IncomeExpenses;