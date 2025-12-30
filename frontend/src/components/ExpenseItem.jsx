import formatDate from "../utils/formatDate";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/trash-outline.svg";

function ExpenseItem({ expense, handleOpenModal, handleDelete }) {
  return (
    <li className="flex justify-between items-center sm:items-center sm:gap-0">
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 border border-gray-200 rounded-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          <p className="text-xl md:text-2xl">{expense.icon}</p>
        </div>

        <div>
          <p className="font-medium">{expense.category}</p>
          <p className="text-sm text-gray-500">{formatDate(expense.date)}</p>
          <p className="text-xl text-gray-500 font-semibold">
            ${expense.amount}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleOpenModal(true, expense)}
          className="bg-gray-200 rounded-md p-1 cursor-pointer"
        >
          <img className="w-6 h-6" src={editIcon} alt="edit" />
        </button>
        <button
          type="button"
          onClick={() => handleDelete(expense._id)}
          className="bg-red-200 rounded-md p-1 cursor-pointer"
        >
          <img className="w-6 h-6" src={deleteIcon} alt="delete" />
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;
