import formatDate from '../utils/formatDate';

function ExpenseItem({ expense }) {
  return (
    <li className='flex justify-between items-center'>
        <div className="">
            <p className="font-medium">{expense.category}</p>
            <p className="text-sm text-gray-500">{formatDate(expense.date)}</p>
        </div>

        <div className="font-semibold text-gray-500">
             <p className="text-lg">${expense.amount}</p>
        </div>
    </li>
  )
}

export default ExpenseItem
