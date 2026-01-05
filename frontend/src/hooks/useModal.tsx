import { useState } from "react";
import { EmojiClickData } from "emoji-picker-react";
import type { Expense, ExpenseFormData } from '../types/types.js'

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [expenseData, setExpenseData] = useState<ExpenseFormData>({
    icon: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleOpenModal = (edit = false, expense: Expense | null) => {
    setIsModalOpen(true);

    setIsEditing(edit);

    if (edit && expense) {
      setExpenseData({
        icon: expense.icon,
        category: expense.category,
        amount: String(expense.amount),
        date: new Date(Number(expense.date)).toISOString().split("T")[0],
      });

      setEditingId(expense._id);
    } else {
      setExpenseData({ icon: "", category: "", amount: "", date: "" });
      setEditingId("");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setEditingId("");
    setExpenseData({
      icon: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setExpenseData((prev) => ({
      ...prev,
      [name]: name === "amount" ? value.replace(/[^0-9.]/g, '') : value,
    }));
  };

  const toggleEmojiPicker = () => setIsEmojiPickerOpen(!isEmojiPickerOpen);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
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
    toggleEmojiPicker,
    editingId,
  };
}

export default useModal;
