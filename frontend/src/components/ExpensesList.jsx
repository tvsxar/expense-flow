import ExpenseItem from "./ExpenseItem";;

function ExpensesList() {
  const expenses = [
    { id: 1, category: "Food", amount: 25, date: "2025-03-18" },
    { id: 2, category: "Transport", amount: 12, date: "2025-03-17" },
    { id: 3, category: "Entertainment", amount: 40, date: "2025-03-17" },
  ];

  return (
  <div className="bg-white border border-gray-200 rounded-xl shadow-lg max-w-3xl mx-auto p-6 mt-8">
    <h2 className="font-bold">Recent Expenses</h2>
    <ul className="mt-4 space-y-4">
        {expenses.map((expense, idx) => (
            <ExpenseItem key={expense.id + idx} expense={expense} />
        ))}
    </ul>
  </div>
);
}

export default ExpensesList;
