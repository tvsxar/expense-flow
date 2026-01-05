import { EmojiClickData } from "emoji-picker-react";

export interface Expense {
  _id: string;
  icon: string;
  category: string;
  date: string;
  amount: number;
}

export interface ExpenseFormData {
  icon: string;
  category: string;
  amount: string;
  date: string;
}

export interface Modal {
  handleCloseModal: () => void;
  toggleEmojiPicker: () => void;
  expenseData: ExpenseFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEmojiPickerOpen: boolean;
  handleEmojiClick: (emojiData: EmojiClickData) => void;
  isModalOpen: boolean;
  isEditing: boolean;
  handleOpenModal: (edit: boolean, expense: Expense | null) => void;
  setExpenseData: React.Dispatch<React.SetStateAction<ExpenseFormData>>;
  editingId: string;
}

export interface TotalChartItem {
  date: string;
  total: number;
  label: string;
}

export interface CategoryChartItem {
  category: string;
  total: number;
}

export interface Period {
  to: string;
  from: string;
}
