// Imports
import { GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'

// App Imports
import { UserType } from './types'
<<<<<<< HEAD
import { create, remove } from './resolvers'
=======
import { create, remove, createStyle } from './resolvers'
// import { TEXT } from 'sequelize/types'
>>>>>>> 68b7dbf... Import createStyle in the user mutation file

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

    style: {
      name: 'style',
      type: GraphQLString
    },

    survey: {
      name: 'survey',
      type: GraphQLBoolean
    }
  },
  resolve: createStyle
}