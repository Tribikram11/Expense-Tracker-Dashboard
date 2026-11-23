import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function TransactionItem({ item }) {
  const { dispatch } = useContext(TransactionContext);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  return (
    <ul>
      <li key={item.id}>
        <p>{item.title}</p>
        <div>
          {item.type === "income" ? (
            <p style={{ color: "green" }}>+{item.amount}</p>
          ) : (
            <p style={{ color: "red" }}>-{item.amount}</p>
          )}
        </div>

        <p>{item.category}</p>

        {item.type === "expense" ? (
          <p style={{ color: "red" }}>{item.type}</p>
        ) : (
          <p style={{ color: "green" }}>{item.type}</p>
        )}
        <p>{item.date}</p>
        <button onClick={() => deleteTransaction(item.id)}>delete</button>
      </li>
    </ul>
  );
}

export default TransactionItem;
