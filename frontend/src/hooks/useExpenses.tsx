import { useQuery, useMutation } from "@apollo/client";
import {
  GET_EXPENSES,
  ADD_EXPENSE,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
} from "../apollo/expenses.js";

function useExpenses(period: {to: string, from: string}) {
  const expensesQuery = useQuery(GET_EXPENSES, {
    variables: period,
  });
  const [addExpense, addState] = useMutation(ADD_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES, variables: period }],
  });
  const [editExpense, editState] = useMutation(EDIT_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES, variables: period }],
  });
  const [deleteExpense, deleteState] = useMutation(DELETE_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES, variables: period }],
  });

  return {
    expensesQuery,
    addExpense,
    editExpense,
    deleteExpense,
    loading:
      expensesQuery.loading ||
      addState.loading ||
      editState.loading ||
      deleteState.loading,
    error:
      expensesQuery.error ||
      addState.error ||
      editState.error ||
      deleteState.error,
  };
}

export default useExpenses;
