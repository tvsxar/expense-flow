import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCards from "../components/SummaryCards";
import ExpensesCharts from "../components/ExpensesCharts";
import ExpensesList from "../components/ExpensesList";
import ExpenseModal from "../components/ExpenseModal";

function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expenseData, setExpenseData] = useState({
    category: "",
    amount: "",
    date: "",
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setExpenseData((prev) => ({
      ...prev,
      [name]: name === "amount" ? value.replace(/[^0-9.]/g, 0) :value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        handleOpenModal={handleOpenModal}
      />

      <div className="flex-1 py-12">
        <SummaryCards />
        <ExpensesCharts />
        <ExpensesList />
      </div>

      {isModalOpen && (
        <ExpenseModal
          expenseData={expenseData}
          handleCloseModal={handleCloseModal}
          handleInputChange={handleInputChange}
        />
      )}

      <Footer />
    </div>
  );
}

export default DashboardPage;
