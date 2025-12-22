import SummaryCard from "./SummaryCard";

function SummaryCards() {
  const summaryData = [
    { title: "Total Expenses", value: "$350", icon: "💸" },
    { title: "Average per Day", value: "$50", icon: "📊" },
    { title: "Last Expense", value: "$30", icon: "🍔" },
  ];

  return (
    <div className="flex gap-6 items-center justify-center flex-wrap">
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
