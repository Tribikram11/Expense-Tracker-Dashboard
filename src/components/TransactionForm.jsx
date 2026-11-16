function TransactionForm() {
  return (
    <>
      <form action="">
        <label htmlFor="title">Title: </label>
        <input type="text" placeholder="title" name="title" id="" />

        <label htmlFor="amount">Amount : </label>
        <input type="number" placeholder="amount" name="amount" id="" />

        <label htmlFor="type">Type :</label>
        <input type="radio" name="type" id="" />
        income
        <input type="radio" name="type" id="" />
        expense

        <label htmlFor="date">Date : </label>
        <input type="date" name="date" />
        
        <label htmlFor="">category:</label>
        <select name="" id="">
          <option value="">food</option>
          <option value="">shopping</option>
          <option value="">transportation</option>
          <option value="">entertainment</option>
          <option value="">bills</option>
          <option value="">salary</option>
          <option value="">freelance</option>
          <option value="">others</option>
        </select>
        <button>submit</button>
      </form>
    </>
  );
}

export default TransactionForm;
