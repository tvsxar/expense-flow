import formatDate from '../utils/formatDate';

function ExpenseItem({ expense }) {
  return (
    <li className='flex flex-col sm:flex-row justify-between items-start sm:items-center sm:gap-0'>
        <div>
            <p className="font-medium">{expense.category}</p>
            <p className="text-sm text-gray-500">{formatDate(expense.date)}</p>
        </div>

        <div className="font-semibold text-gray-500 text-right sm:text-left">
             <p className="text-lg">${expense.amount}</p>
        </div>
    </li>
  )
}

export default ExpenseItem
