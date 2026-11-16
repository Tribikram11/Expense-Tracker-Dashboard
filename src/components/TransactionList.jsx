function TransactionList() {
  let transactionArr = [
    {
      id: 1,
      title: "grocery",
      amount: 290,
      type: "expense",
      category: "food",
      date: "2026-11-15",
    },
    {
      id: 2,
      title: "grocery",
      amount: 290,
      type: "expense",
      category: "food",
      date: "2026-11-15",
    },
    {
      id: 3,
      title: "grocery",
      amount: 290,
      type: "expense",
      category: "food",
      date: "2026-11-15",
    },
    {
      id: 4,
      title: "grocery",
      amount: 290,
      type: "expense",
      category: "food",
      date: "2026-11-15",
    },
    {
      id: 5,
      title: "salary",
      amount: 290,
      type: "income",
      category: "salary",
      date: "2026-11-5",
    }
]

if(transactionArr.length === 0){
    return <>
        <h1>no transactions found</h1>
    </>
}

  return (
    <>
      {transactionArr.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.type === "income" ? <p>+{item.amount}</p> : <p>-{item.amount}</p> }</p>
          <p>{item.category}</p>
          {item.type === "expense" ? <p style={{color: "red"}}>{item.type}</p> : <p style={{color : "green"}}>{item.type}</p>}
          <p>{item.date}</p>
        </div>
        
      ))}
    </>
  );
}

export default TransactionList;
