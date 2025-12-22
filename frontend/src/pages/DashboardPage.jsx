import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCards from "../components/SummaryCards";
import ExpensesCharts from "../components/ExpensesCharts";
import ExpensesList from "../components/ExpensesList";

function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 py-12">
        <SummaryCards />
        <ExpensesCharts />
        <ExpensesList />
      </div>

      <Footer />
    </div>
  );
}

export default DashboardPage;
