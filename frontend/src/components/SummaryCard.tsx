interface SummaryCardProps {
  title: string,
  amount: string,
  icon: string
}

function SummaryCard({ title, amount, icon }: SummaryCardProps) {
  return (
    <div className="bg-white border border-gray-200 py-4 px-4 md:px-6 lg:px-8 rounded-xl shadow-lg flex items-center gap-4 w-full sm:max-w-sm md:w-64">
      {icon && <div className="text-2xl">{icon}</div>}
      <div className="flex flex-col">
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p className="text-xl font-bold">{amount}</p>
      </div>
    </div>
  );
}

export default SummaryCard;
