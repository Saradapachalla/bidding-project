import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Job } from "./job";

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            // ${User.typeDefs}
            ${Job.typeDefs}
            type Query {
            //    ${User.queries}
               ${Job.queries}
            }

            type Mutation {
            //    ${User.mutations}
               ${Job.mutations}
            }
        `,
    resolvers: {
      Query: {
        // ...User.resolvers.queries,
        ...Job.resolvers.queries,
      },
      Mutation: {
        // ...User.resolvers.mutations,
        ...Job.resolvers.mutations,
      },
    },
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;