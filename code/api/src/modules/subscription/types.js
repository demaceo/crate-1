// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

// App Imports
import { UserType } from "../user/types";
import CrateType from "../crate/types";

// Subscription type
const SubscriptionType = new GraphQLObjectType({
  name: "subscription",
  description: "Subscription Type",

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    crate: { type: CrateType },
    styleType: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export default SubscriptionType;

// add "type" for style type
