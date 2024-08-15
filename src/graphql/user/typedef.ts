export const typeDefs = `#graphql
    type User {
        id: ID!
        firstName: String!
        lastName: String
        email: String!
        profileImageURL: String
    }

    type Job {
        id: ID!
        description: String!
        requirement: String!
        posterName: String!
        posterContact: String!
        lowestBid: String!
        bidsCount: Int
        expirationDate: String!
    }
`;
