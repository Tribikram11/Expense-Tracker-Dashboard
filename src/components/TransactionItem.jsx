function TransactionItem({ item }) {
  return (
    <div>
      <p>{item.id}</p>
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

      <button>delete</button>
    </div>
  );
}

export default TransactionItem;
