import ExpenseItem from "./ExpenseItem.js";

interface Expense {
  _id: string,
  icon: string,
  category: string,
  date: string,
  amount: number
}

interface ExpensesListProps {
  handleOpenModal: (edit: boolean, expense: Expense | null) => void,
  expenses: Expense[],
  handleDelete: (id: string) => void
}

function ExpensesList({ handleOpenModal, expenses, handleDelete }: ExpensesListProps) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-xl shadow-lg 
    w-full max-w-3xl mx-auto p-4 sm:p-6 mt-8 flex flex-col min-h-56"
    >
      <h2 className="font-bold text-lg sm:text-xl">Recent Expenses</h2>

      {expenses.length > 0 ? (
        <ul className="mt-4 space-y-4 flex-1">
          {expenses.map((expense, idx) => (
            <ExpenseItem
              key={expense._id ?? idx}
              expense={expense}
              handleDelete={handleDelete}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </ul>
      ) : (
        <div className="flex-1 flex items-center justify-center mt-4">
          <p className="text-sm text-gray-500">
            You don’t have any expenses in this period.
          </p>
        </div>
      )}
    </div>
  );
}

export default ExpensesList;
