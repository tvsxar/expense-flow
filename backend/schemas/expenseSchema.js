import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from "graphql";
import { Query, Mutation } from "../resolvers/expenseResolver.js";

const expenseType = new GraphQLObjectType({
  name: "Expense",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    category: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(GraphQLFloat) },
    date: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getExpensesByPeriod: {
      type: new GraphQLList(expenseType),
      args: {
        from: { type: new GraphQLNonNull(GraphQLString) },
        to: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: Query.getExpensesByPeriod,
    },
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addExpense: {
      type: expenseType,
      args: {
        category: { type: new GraphQLNonNull(GraphQLString) },
        amount: { type: new GraphQLNonNull(GraphQLFloat) },
        date: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: Mutation.addExpense,
    },

    editExpense: {
      type: expenseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: GraphQLString },
        amount: { type: GraphQLFloat },
        date: { type: GraphQLString },
      },
      resolve: Mutation.editExpense,
    },

    deleteExpense: {
      type: expenseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: Mutation.deleteExpense,
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
