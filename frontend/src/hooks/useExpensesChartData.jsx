function useExpensesChartData(expenses = [], period) {
  const totalChart = [];
  let categoryChart = [];

  const startDate = new Date(period.from);
  const endDate = new Date(period.to);

  // total chart (line & bar)
  for (
    let day = new Date(startDate);
    day <= endDate;
    day.setDate(day.getDate() + 1)
  ) {
    const dateStr = day.toISOString().split("T")[0];

    const total = expenses
      .filter((exp) => {
        const expDate = new Date(Number(exp.date)).toISOString().split("T")[0];
        return expDate === dateStr;
      })
      .reduce((sum, exp) => sum + exp.amount, 0);

    totalChart.push({
      date: dateStr,
      total: total,
      label: day.toLocaleDateString("en-US", { weekday: "short" }),
    });
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
