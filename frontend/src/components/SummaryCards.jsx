import SummaryCard from "./SummaryCard";
import { formatAmount } from "../utils/formatAmount";

function SummaryCards({ expenses, period }) {
  const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const dayStart = new Date(period.from);
  const dayEnd = new Date(period.to);

  const daysAmount = (dayEnd - dayStart) / (1000 * 60 * 60 * 24) + 1;

  const summaryData = [
    {
      title: "Total Expenses",
      value: `$${formatAmount(totalAmount)}`,
      icon: "💸",
    },
    {
      title: "Average per Day",
      value: `$${formatAmount((totalAmount / daysAmount).toFixed(1))}`,
      icon: "📊",
    },
    {
      title: "Last Expense",
      value: `$${expenses[0].amount}`,
      icon: `${expenses[0].icon}`,
    },
  ];

  return (
    <div className="flex gap-2 items-center justify-center flex-wrap mb-8 md:gap-4 lg:gap-6">
      {summaryData.map((data, index) => (
        <SummaryCard
          key={index}
          title={data.title}
          amount={data.value}
          icon={data.icon}
        />
      ))}
    </div>
  );
}

export default SummaryCards;
