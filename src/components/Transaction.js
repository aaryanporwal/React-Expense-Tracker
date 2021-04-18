import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  // transaction passed as props
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>₹ {formattedTransactionAmount(transaction)}</span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </>
  );
};

function formattedTransactionAmount(transaction) {
  return transaction.amount.toLocaleString();
}
