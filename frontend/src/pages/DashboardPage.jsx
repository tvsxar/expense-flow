// hooks
import useExpenses from "../hooks/useExpenses";
import useModal from "../hooks/useModal";
import usePeriodDropdown from "../hooks/usePeriodDropdown";
import useExpensesChartData from "../hooks/useExpensesChartData";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCards from "../components/SummaryCards";
import ExpensesCharts from "../components/ExpensesCharts";
import ExpensesList from "../components/ExpensesList";
import ExpenseModal from "../components/ExpenseModal";

function DashboardPage() {
  const modal = useModal();
  const { period, handleSelect, selected } = usePeriodDropdown();
  const {
    expensesQuery,
    addExpense,
    editExpense,
    deleteExpense,
    loading,
    error,
  } = useExpenses(period);
  const chartData = useExpensesChartData(expensesQuery.data?.expenses, period);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (modal.isEditing) {
        await editExpense({
          variables: {
            id: modal.editingId,
            icon: modal.expenseData.icon,
            category: modal.expenseData.category,
            amount: parseFloat(modal.expenseData.amount),
            date: modal.expenseData.date,
          },
        });
      } else {
        await addExpense({
          variables: {
            icon: modal.expenseData.icon || "😀",
            category: modal.expenseData.category,
            amount: parseFloat(modal.expenseData.amount),
            date: modal.expenseData.date,
          },
        });
      }
    } catch (err) {
      console.error(err);
    }

    modal.handleCloseModal();
  };

  const handleDelete = async (expenseId) => {
    try {
      await deleteExpense({
        variables: {
          id: expenseId,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-500" />
        <p className="text-sm text-gray-500">Loading expenses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3">
        <p className="text-red-500 text-lg font-medium">
          Something went wrong!
        </p>
        <p className="text-sm text-gray-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        handleOpenModal={modal.handleOpenModal}
        selected={selected}
        handleSelect={handleSelect}
      />

      <div className="flex-1 pt-4 pb-12 px-4 sm:px-12 lg:px-25">
        <SummaryCards period={period} expenses={expensesQuery.data.expenses} />
        <ExpensesCharts chartData={chartData} />
        <ExpensesList
          handleOpenModal={modal.handleOpenModal}
          expenses={expensesQuery.data.expenses}
          handleDelete={handleDelete}
        />
      </div>

      {modal.isModalOpen && (
        <ExpenseModal modal={modal} handleSubmit={handleSubmit} />
      )}

      <Footer />
    </div>
  );
}

export default DashboardPage;
