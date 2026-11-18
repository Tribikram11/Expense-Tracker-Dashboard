import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/transactionReducer";

export const TransactionContext = createContext();

function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
