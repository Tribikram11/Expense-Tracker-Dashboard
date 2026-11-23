function TransactionFilters({
  filter,
  setFilter,
  typeFilter,
  setTypeFilter,
  categoryFilter,
  setCategoryFilter,
  dateFilter,
  setDateFilter,
}) {
  const handlechange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search by title"
        name=""
        id=""
        value={filter}
        onChange={handlechange}
      />
      <label htmlFor="type-filter">type:</label>
      <select
        id="type-filter"
        name="type-filter"
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <label htmlFor="category-filter">category:</label>
      <select
        name="category-filter"
        id="category-filter"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="shopping">Shopping</option>
        <option value="transportation">Transportation</option>
        <option value="entertainment">Entertainment</option>
        <option value="bills">Bills</option>
        <option value="salary">Salary</option>
        <option value="freelance">Freelance</option>
        <option value="others">Others</option>
      </select>

      <label htmlFor="sorting">sort by</label>
      <select
        name="sorting"
        id="sorting"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >
        <option value="newest first">newest first</option>
        <option value="oldest first">oldest first</option>
      </select>
    </>
  );
}

export default TransactionFilters;
