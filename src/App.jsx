import { useState } from "react";
import Dashboard from "./components/Dashboard";
import TransactionFilters from "./components/TransactionFilters";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TransactionProvider from "./context/TransactionContext";

function App() {
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [ dateFilter, setDateFilter] = useState("newest first")


  return (
    <>
      <TransactionProvider>
        <TransactionFilters
          filter={filter}
          setFilter={setFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
        />
        <Dashboard />
        <TransactionForm />
        <TransactionList filter={filter} typeFilter={typeFilter} categoryFilter={categoryFilter} dateFilter={dateFilter} />
      </TransactionProvider>
    </>
  );
}

export default App;
