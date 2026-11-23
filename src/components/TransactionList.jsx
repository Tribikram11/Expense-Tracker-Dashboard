import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { TransactionContext } from "../context/TransactionContext";

function TransactionList({ filter, typeFilter, categoryFilter, dateFilter }) {
  const { state } = useContext(TransactionContext);

  const filteredTransactions = state.filter((transaction) => {
    const matchesTitle = transaction.title
      .toLowerCase()
      .includes(filter.toLowerCase());

    const matchesType = typeFilter === "all" || transaction.type === typeFilter;

    const matchCategory =
      categoryFilter === "all" || transaction.category === categoryFilter;

    return matchesTitle && matchesType && matchCategory;
  });

  if (filteredTransactions.length === 0) {
    return (
      <>
        <h1>no transactions found</h1>
      </>
    );
  }

  let sortedTransaction;
  if (dateFilter === "newest first") {
    sortedTransaction = [...filteredTransactions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } else if (dateFilter === "oldest first") {
    sortedTransaction = [...filteredTransactions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  }

  return (
    <>
      {sortedTransaction.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default TransactionList;
