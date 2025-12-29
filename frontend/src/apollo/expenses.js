import { gql } from "@apollo/client";

export const GET_EXPENSES = gql`
  query getExpensesByPeriod($from: String!, $to: String!) {
    expenses: getExpensesByPeriod(from: $from, to: $to) {
      _id
      category
      amount
      date
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($category: String!, $amount: Float!, $date: String!) {
    newExpense: addExpense(category: $category, amount: $amount, date: $date) {
      _id
      category
      amount
      date
    }
  }
`;

export const EDIT_EXPENSE = gql`
  mutation editExpense(
    $id: String!
    $category: String
    $amount: Float
    $date: String
  ) {
    editedExpense: editExpense(id: $id, category: $category, amount: $amount, date: $date) {
      _id
      category
      amount
      date
    }
  }
`;

export const DELETE_EXPENSE = gql`
  mutation deleteExpense($id: String!) {
    deletedExpense: deleteExpense(id: $id) {
      _id
    }
  }
`;
