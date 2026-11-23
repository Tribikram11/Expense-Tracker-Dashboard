import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { TransactionContext } from "../context/TransactionContext";

function TransactionList() {
  const { state } = useContext(TransactionContext);

  if (state.length === 0) {
    return (
      <>
        <h1>no transactions found</h1>
      </>
    );
  }

  return (
    <>
      {state.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default TransactionList;
