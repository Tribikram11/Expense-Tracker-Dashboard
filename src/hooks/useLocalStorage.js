import { useEffect, useState } from "react";

function useLocalStorage(key, initalValue) {

    const [transactions, setTransactions] = useState(() => {
        let data = localStorage.getItem(key);
        return data ? JSON.parse(data) : initalValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(transactions))
    }
        , [transactions, key])

    return [transactions, setTransactions];
}

export default useLocalStorage;