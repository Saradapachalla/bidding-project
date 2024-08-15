export const typeDefs = `#graphql
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
