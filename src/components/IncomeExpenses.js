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
    <div>
      <h4>your income & expense</h4>
      <div className="flex" >
        <h2 className="mx-2">{money.income}</h2>
        <p className="mx-2">{money.expense}</p>
      </div>
    </div>
  )
}
export default IncomeExpenses;