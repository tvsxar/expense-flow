import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_EXPENSES } from "../apollo/expenses";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCards from "../components/SummaryCards";
import ExpensesCharts from "../components/ExpensesCharts";
import ExpensesList from "../components/ExpensesList";
import ExpenseModal from "../components/ExpenseModal";

function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const expenses = useQuery(GET_EXPENSES, {
    variables: {
      from: "2025-12-01",
      to: "2025-12-31",
    },
  });
  const [expenseData, setExpenseData] = useState({
    icon: "",
    category: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    console.log(expenses.data.getExpensesByPeriod)
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOpenModal = (edit = false) => {
    setIsModalOpen(true);

    setIsEditing(edit);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setExpenseData((prev) => ({
      ...prev,
      [name]: name === "amount" ? value.replace(/[^0-9.]/g, 0) : value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        handleOpenModal={handleOpenModal}
      />

      <div className="flex-1 pt-4 pb-12 px-4 sm:px-12 lg:px-25">
        <SummaryCards />
        <ExpensesCharts />
        <ExpensesList handleOpenModal={handleOpenModal} />
      </div>

      {isModalOpen && (
        <ExpenseModal
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          handleCloseModal={handleCloseModal}
          handleInputChange={handleInputChange}
        />
      )}

      <Footer />
    </div>
  );
}

export default DashboardPage;
