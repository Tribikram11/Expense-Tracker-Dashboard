import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/transactionReducer";
import useLocalStorage from "../hooks/useLocalStorage";


export const TransactionContext = createContext();

function TransactionProvider({ children }) {

  const [ transactions, setTransactions] = useLocalStorage("transactions", initialState);

  const [state, dispatch] = useReducer(reducer, transactions);

  useEffect(() => {
    setTransactions(state)
  }, [state, setTransactions])

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
