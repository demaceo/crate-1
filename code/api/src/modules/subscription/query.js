// Imports
import { GraphQLInt, GraphQLList } from "graphql";

// App Imports
import SubscriptionType from "./types";
import { getAll, getByUser, get } from "./resolvers";

// Subscriptions All
export const subscriptions = {
  type: new GraphQLList(SubscriptionType),
  resolve: getAll,
};

// Subscriptions by user
export const subscriptionsByUser = {
  type: new GraphQLList(SubscriptionType),
  resolve: getByUser,
};

// Subscription By id
export const subscription = {
  type: SubscriptionType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: get,
};

// add ability to query by style type (ex. I want to search for medieval
// clothes even though it wasnt necessarily my style when i filled out the survey)
