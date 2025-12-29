import ExpenseItem from "./ExpenseItem";

function ExpensesList({ handleOpenModal, expenses }) {
  const expensess = [
    { id: 1, icon: "💸", category: "Food", amount: 25, date: "2025-03-18" },
    { id: 2, icon: "📊", category: "Transport", amount: 12, date: "2025-03-17" },
    { id: 3, icon: "🍔", category: "Entertainment", amount: 40, date: "2025-03-17" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg w-full max-w-3xl mx-auto p-4 sm:p-6 mt-8">
      <h2 className="font-bold text-lg sm:text-xl">Recent Expenses</h2>
      <ul className="mt-4 space-y-4">
        {expensess.map((expense, idx) => (
          <ExpenseItem
            key={expense.id + idx}
            expense={expense}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;
