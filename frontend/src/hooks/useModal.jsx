import { useState } from "react";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [expenseData, setExpenseData] = useState({
    icon: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleOpenModal = (edit = false, expense) => {
    setIsModalOpen(true);

    setIsEditing(edit);

    if (edit && expense) {
      setExpenseData({
        icon: expense.icon,
        category: expense.category,
        amount: expense.amount,
        date: expense.date,
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setExpenseData({
      icon: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setExpenseData((prev) => ({
      ...prev,
      [name]: name === "amount" ? value.replace(/[^0-9.]/g, 0) : value,
    }));
  };

  const toggleEmojiPicker = () => setIsEmojiPickerOpen(!isEmojiPickerOpen);

  const handleEmojiClick = (emojiData) => {
    setExpenseData((prev) => ({
      ...prev,
      icon: emojiData.emoji,
    }));

    toggleEmojiPicker();
  };

  return {
    isModalOpen,
    isEditing,
    handleOpenModal,
    handleCloseModal,
    expenseData,
    setExpenseData,
    handleInputChange,
    isEmojiPickerOpen,
    handleEmojiClick,
    toggleEmojiPicker
  };
}

export default useModal;
