// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from "graphql";

// App Imports
import { UserType, UserLoginType, UserGenderType } from "./types";
import { getAll, getById, login, getGenders } from "./resolvers";

// All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll,
};

// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
};

// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: "email",
      type: GraphQLString,
    },

    password: {
      name: "password",
      type: GraphQLString,
    },

    role: {
      name: "role",
      type: GraphQLString,
    },
  },
  resolve: login,
};

// Genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders,
};

// Queries are what tell any queries that are made where to go for their information.
// when a query is made, it will point to a resolver which will end up handling the logic of that query
