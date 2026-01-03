import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface Expense {
  _id: string,
  icon: string,
  category: string,
  date: string,
  amount: number
}

interface ExpenseFormData {
  icon: string;
  category: string;
  amount: string;
  date: string;
}

interface Modal {
    handleCloseModal: () => void,
    toggleEmojiPicker: () => void,
    expenseData: ExpenseFormData,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isEmojiPickerOpen: boolean,
    handleEmojiClick: (emojiData: EmojiClickData) => void,
    isModalOpen: boolean,
    isEditing: boolean,
    handleOpenModal: (edit: boolean, expense: Expense | null) => void,
    setExpenseData: React.Dispatch<React.SetStateAction<ExpenseFormData>>,
    editingId: string,
  }

interface ExpenseModalProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  modal: Modal
}

function ExpenseModal({ modal, handleSubmit }: ExpenseModalProps) {
  return (
    <div
      onClick={modal.handleCloseModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-4 sm:p-6 lg:p-8 relative"
      >
        <button
          onClick={modal.handleCloseModal}
          className="absolute text-xl cursor-pointer top-4 right-4 text-gray-400 
          hover:text-[#E9D6EC] hover:drop-shadow-[0_0_6px_rgba(233,214,236,0.7)] transition-all"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Add New Expense
        </h2>

        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="text-gray-500">Select icon:</span>
            <button
              type="button"
              onClick={modal.toggleEmojiPicker}
              className="w-12 h-12 rounded-full border border-gray-200 bg-gray-100 flex items-center 
              justify-center text-2xl hover:scale-105 transition-transform cursor-pointer"
            >
              {modal.expenseData.icon || "😀"}
            </button>

            {modal.isEmojiPickerOpen && (
              <div className="h-12">
                {/* @ts-ignore */}
                <EmojiPicker onEmojiClick={modal.handleEmojiClick} />
              </div>
            )}
          </div>

          <input
            onChange={modal.handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e") e.preventDefault();
            }}
            type="number"
            name="amount"
            value={modal.expenseData.amount}
            placeholder="Amount"
            min="0.1"
            step="0.1"
            className="bg-gray-100 text-gray-900 placeholder-gray-500 px-3 py-2 sm:px-4 sm:py-2
            rounded-xl border border-gray-200 focus:border-[#E9D6EC] 
            focus:drop-shadow-[0_0_6px_rgba(233,214,236,0.7)] transition-all"
          />
          <input
            onChange={modal.handleInputChange}
            type="text"
            name="category"
            value={modal.expenseData.category}
            placeholder="Category"
            className="bg-gray-100 text-gray-900 placeholder-gray-500 px-3 py-2 sm:px-4 sm:py-2 
            rounded-xl border border-gray-200 focus:border-[#E9D6EC] 
            focus:drop-shadow-[0_0_6px_rgba(233,214,236,0.7)] transition-all"
          />
          <input
            onChange={modal.handleInputChange}
            type="date"
            name="date"
            value={modal.expenseData.date}
            className="bg-gray-100 text-gray-900 px-3 py-2 sm:px-4 sm:py-2 rounded-xl border
             border-gray-200 focus:border-[#E9D6EC] focus:drop-shadow-[0_0_6px_rgba(233,214,236,0.7)] 
             transition-all"
          />

          <button
            type="submit"
            className="bg-[#E9D6EC] text-gray-900 font-semibold py-2 rounded-xl 
            hover:bg-[#E0C2E6] hover:drop-shadow-[0_0_8px_rgba(233,214,236,0.7)] transition-all cursor-pointer"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseModal;
