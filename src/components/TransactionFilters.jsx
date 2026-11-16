function TransactionFilters() {
  return (
    <>
      <input type="text" placeholder="search by title" name="" id="" />
      <span>
        <button>all</button>
        <button>income</button>
        <button>expense</button>
      </span>
      <label htmlFor="">category:</label>
      <select name="" id="">
        <option value="">-select-</option>
        <option value="">food</option>
        <option value="">shopping</option>
        <option value="">transportation</option>
        <option value="">entertainment</option>
        <option value="">bills</option>
        <option value="">salary</option>
        <option value="">freelance</option>
        <option value="">others</option>
      </select>

      <label htmlFor="sorting">sort by</label>
      <select name="sorting" id="">
        <option value="">-select-</option>
        <option value="">newest first</option>
        <option value="">oldest first</option>
      </select>
    </>
  );
}

export default TransactionFilters;
