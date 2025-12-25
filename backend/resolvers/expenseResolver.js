import Expense from "../models/expenseModel.js";

const expenseResolvers = {
  Query: {
    getExpensesByPeriod: async (_, { from, to }) => {
      try {
        const expenses = await Expense.find({
          date: { $gte: new Date(from), $lte: new Date(to) },
        }).sort({ date: -1, createdAt: -1 });

        return expenses;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },
  },

  Mutation: {
    addExpense: async (_, { icon, category, amount, date }) => {
      try {
        if (amount <= 0) {
          throw new Error("Amount must be greater than 0");
        }

        if (category.trim().length === 0) {
          throw new Error("Category is required");
        }

        const newExpense = await Expense.create({
          icon,
          category,
          amount,
          date: new Date(date),
        });

        return newExpense;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },

    editExpense: async (_, { id, icon, category, amount, date }) => {
      try {
        const selectedExpense = await Expense.findById(id);

        if (!selectedExpense) throw new Error("Selected expense not found!");

        if (icon && icon.trim() && selectedExpense.icon !== icon) {
          selectedExpense.icon = icon;
        }
        selectedExpense.category = category.trim()
          ? category
          : selectedExpense.category;
        selectedExpense.amount = amount > 0 ? amount : selectedExpense.amount;
        if (date) selectedExpense.date = new Date(date);

        await selectedExpense.save();

        return selectedExpense;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },

    deleteExpense: async (_, { id }) => {
      try {
        const deletedExpense = await Expense.findByIdAndDelete(id);

        if (!deletedExpense) throw new Error("Selected expense not found!");

        return deletedExpense;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },
  },
};

const Query = expenseResolvers.Query;
const Mutation = expenseResolvers.Mutation;

export { Query, Mutation };
