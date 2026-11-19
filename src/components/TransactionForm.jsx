import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function TransactionForm() {
  const { dispatch } = useContext(TransactionContext);

  const [formData, setFormData] = useState({
    title: "",
    amount: 0,
    type: "",
    category: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "amount" ? Number(value) : value;
    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
  };

  const validate = () => {
    const newErrors = {
      title: "",
      amount: "",
      type: "",
      category: "",
      date: "",
    };

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (formData.amount <= 0) {
      newErrors.amount = "amount must be greater than zero";
    }
    if (!formData.type) {
      newErrors.type = "select the type of transaction";
    }
    if (!formData.category) {
      newErrors.category = "select the category of transaction";
    }
    if (!formData.date) {
      newErrors.date = "select the date";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("form is valid");
      const newTransaction = {
        id: Date.now(),
        title: formData.title,
        amount: formData.amount,
        type: formData.type,
        category: formData.category,
        date: formData.date,
      };
      dispatch({
        type: "ADD_TRANSACTION",
        payload: newTransaction,
      });
      setFormData({
        title: "",
        amount: 0,
        type: "",
        category: "",
        date: "",
      });
      setErrors({
        title: "",
        amount: "",
        type: "",
        category: "",
        date: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          placeholder="title"
          name="title"
          id="title"
          onChange={handleChange}
          value={formData.title}
        />
        {errors.title !== "" && <p>{errors.title}</p>}
        <label htmlFor="amount">Amount : </label>
        <input
          type="number"
          placeholder="amount"
          name="amount"
          id="amount"
          onChange={handleChange}
          value={formData.amount}
        />
        {errors.amount !== "" && <p>{errors.amount}</p>}
        <label htmlFor="type">Type :</label>
        <input
          type="radio"
          name="type"
          id="income"
          value="income"
          checked={formData.type === "income"}
          onChange={handleChange}
        />
        Income
        <input
          type="radio"
          name="type"
          id="expense"
          value="expense"
          checked={formData.type === "expense"}
          onChange={handleChange}
        />
        Expense
        {errors.type !== "" && <p>{errors.type}</p>}
        <label htmlFor="date">Date : </label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={handleChange}
          value={formData.date}
        />
        {errors.date !== "" && <p>{errors.date}</p>}
        <label htmlFor="category">category:</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">-select-</option>
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="bills">Bills</option>
          <option value="salary">Salary</option>
          <option value="freelance">Freelance</option>
          <option value="others">Others</option>
        </select>
        {errors.category !== "" && <p>{errors.category}</p>}
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default TransactionForm;
