function useExpensesChartData(expenses = [], period) {
  const totalChart = [];
  let categoryChart = [];

  const startDate = new Date(period.from);
  const endDate = new Date(period.to);

  const MS_IN_DAY = 24 * 60 * 60 * 1000;
  const totalDays = Math.round((endDate - startDate) / MS_IN_DAY) + 1;

  let step = 1;

  if (totalDays > 60) step = 10;
  else if (totalDays > 14) step = 5;

  // total chart (line & bar)
  for (
    let day = new Date(startDate);
    day <= endDate;
    day.setDate(day.getDate() + step)
  ) {
    if (totalDays <= 7) {
      const dateStr = day.toISOString().split("T")[0];

      const total = expenses
        .filter((exp) => {
          const expDate = new Date(Number(exp.date))
            .toISOString()
            .split("T")[0];
          return expDate === dateStr;
        })
        .reduce((sum, exp) => sum + exp.amount, 0);

      totalChart.push({
        date: dateStr,
        total: total,
        label: day.toLocaleDateString("en-US", { weekday: "short" }),
      });
    } else {
      const startBlock = new Date(day);
      const endBlock = new Date(day);
      endBlock.setDate(endBlock.getDate() + step - 1);
      if (endBlock > endDate) endBlock.setTime(endDate.getTime());

      const total = expenses
        .filter((exp) => {
          const expDate = new Date(Number(exp.date));
          return expDate >= startBlock && expDate <= endBlock;
        })
        .reduce((sum, exp) => sum + exp.amount, 0);

      const sameMonth =
        startBlock.getMonth() === endBlock.getMonth() &&
        startBlock.getFullYear() === endBlock.getFullYear();

      const label = sameMonth
        ? `${startBlock.getDate()}-${endBlock.getDate()} ${endBlock.toLocaleDateString(
            "en-US",
            {
              month: "short",
            }
          )}`
        : `${startBlock.getDate()} ${startBlock.toLocaleDateString("en-US", {
            month: "short",
          })} - ${endBlock.getDate()} ${endBlock.toLocaleDateString("en-US", {
            month: "short",
          })}`;

      totalChart.push({
        date: startBlock.toISOString().split("T")[0],
        total: total,
        label: label,
      });
    }
  }

  // category chart (doughnut & pie)
  const categories = [];

  expenses.forEach((expense) => {
    if (!categories.includes(expense.category))
      categories.push(expense.category);
  });

  categories.forEach((category) => {
    const chartDataItem = { category: category, total: 0 };

    expenses.forEach((expense) => {
      if (expense.category === category) chartDataItem.total += expense.amount;
    });

    categoryChart.push(chartDataItem);
  });

  if (categoryChart.length > 5) {
    let otherCategoriesAmount = 0;
    let sortedCategoryChart = [];

    sortedCategoryChart = [...categoryChart]
      .sort((a, b) => b.total - a.total)
      .slice(0, 4);
    const otherCategories = [...categoryChart]
      .sort((a, b) => b.total - a.total)
      .slice(4);
    otherCategories.forEach(
      (category) => (otherCategoriesAmount += category.total)
    );
    sortedCategoryChart.push({
      category: "Others",
      total: otherCategoriesAmount,
    });

    categoryChart = sortedCategoryChart;
  }

  return { totalChart, categoryChart };
}

export default useExpensesChartData;
