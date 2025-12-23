import { useState } from "react";
import ExpenseModal from "../components/ExpenseModal";

export default {
  title: "Components/ExpenseModal",
  component: ExpenseModal,
};

export const Default = () => {
  const [expenseData, setExpenseData] = useState({
    category: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ExpenseModal
      expenseData={expenseData}
      handleCloseModal={() => {}}
      handleInputChange={handleInputChange}
    />
  );
};