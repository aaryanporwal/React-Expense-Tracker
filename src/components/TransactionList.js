import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className={changeTransactionListClass(transaction)}>
            {transaction.text}
            <span>₹ {transaction.amount}</span>
            <button className="delete-btn"> x </button>
          </li>
        ))}
      </ul>
    </>
  );
};

function changeTransactionListClass(transaction) {
  // function to change class based on transaction amount
  let moneyItemClass = "plus";
  if (transaction.amount < 0) {
    moneyItemClass = "minus";
  }
  return moneyItemClass;
}
