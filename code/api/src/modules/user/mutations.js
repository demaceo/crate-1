// Imports
import { GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove, createStyle } from './resolvers'
// import { TEXT } from 'sequelize/types'

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
  resolve: remove
}

// Create Style Preference
export const createStylePreference = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    stylePreference: {
      name: 'styleArray',
      type: GraphQLString
    },

    survey: {
      name: 'survey',
      type: GraphQLBoolean
    }
  },
  resolve: remove
}

// Create Style Preference
export const createStylePreference = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    stylePreference: {
      name: 'stylePreference',
      type: GraphQLString
    }
  },
  resolve: createStyle
}
