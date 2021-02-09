// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove, createStyle } from './resolvers'
// import { TEXT } from 'sequelize/types'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
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

    styleArray: {
      name: 'styleArray',
      type: GraphQLString
    }
  },
  resolve: createStyle
}