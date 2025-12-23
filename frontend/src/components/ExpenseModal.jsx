function ExpenseModal({ expenseData, handleCloseModal, handleInputChange }) {
  return (
    <div onClick={handleCloseModal}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
        <button
          onClick={handleCloseModal}
          className="absolute text-xl cursor-pointer top-4 right-4 text-gray-400 
          hover:text-[#E9D6EC] hover:drop-shadow-[0_0_6px_rgba(233,214,236,0.7)] transition-all"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Add New Expense
        </h2>

        <div className="flex flex-col gap-4">
          <input
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") e.preventDefault();
            }}
            type="number"
            name="amount"
            value={expenseData.amount}
            placeholder="Amount"
            min="0.1"
            step="0.1"
            className="bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2 
            rounded-xl border border-gray-200 focus:border-[#E9D6EC] 
            focus:drop-shadow-[0_0_6px_rgba(233,214,236,0.7)] transition-all"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="category"
            value={expenseData.category}
            placeholder="Category"
            className="bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2 
            rounded-xl border border-gray-200 focus:border-[#E9D6EC] 
            focus:drop-shadow-[0_0_6px_rgba(233,214,236,0.7)] transition-all"
          />
          <input
            onChange={handleInputChange}
            type="date"
            name="date"
            value={expenseData.date}
            className="bg-gray-100 text-gray-900 px-4 py-2 rounded-xl border
             border-gray-200 focus:border-[#E9D6EC] focus:drop-shadow-[0_0_6px_rgba(233,214,236,0.7)] 
             transition-all"
          />

          <button
            type="submit"
            className="bg-[#E9D6EC] text-gray-900 font-semibold py-2 rounded-xl 
            hover:bg-[#E0C2E6] hover:drop-shadow-[0_0_8px_rgba(233,214,236,0.7)] transition-all cursor-pointer"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseModal;
