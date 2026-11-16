import TransactionItem from "./TransactionItem";

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
  },
];

function TransactionList() {
  if (transactionArr.length === 0) {
    return (
      <>
        <h1>no transactions found</h1>
      </>
    );
  }

  return (
    <>
      {transactionArr.map((item) => (
        <TransactionItem key={item.id} item ={item} />
      ))}
    </>
  );
}

export default TransactionList;
