// Imports
import { GraphQLString, GraphQLInt } from "graphql";

// App Imports
import { UserType } from "./types";
import { create, remove } from "./resolvers";

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: "name",
      type: GraphQLString,
    },

    email: {
      name: "email",
      type: GraphQLString,
    },

    password: {
      name: "password",
      type: GraphQLString,
    },
  },
  resolve: create,
};

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
  },
  resolve: remove,
};

// User should have a style preferences array, hand the array of selected
// photos to the backend, where an algorithm is run that based on that array will return a style preferences string
