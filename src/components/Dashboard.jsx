import { useContext, useMemo } from "react";
import { TransactionContext } from "../context/TransactionContext";

function Dashboard() {
  const { state } = useContext(TransactionContext);

  let totalincome = useMemo(() => {
    return state.reduce((acc, transaction) => {
      if (transaction.type === "income") {
        return acc + transaction.amount;
      }
      return acc;
    }, 0);
  }, [state]);

  let totalexpense = useMemo(() => {
    return state.reduce((acc, transaction) => {
      if (transaction.type === "expense") {
        return acc + transaction.amount;
      }
      return acc;
    }, 0);
  }, [state]);

  let balance = useMemo(() => {
    return totalincome - totalexpense;
  }, [totalexpense, totalincome]);

  let transactionCount = useMemo(() => {
    return state.length
  }, [state])

  return (
    <>
      <h3>total balance :${balance}</h3>
      <h3>total income : {totalincome}</h3>
      <h3>total expense : ${totalexpense}</h3>
      <h3>transactions : {transactionCount}</h3>
    </>
  );
}

export default Dashboard;
