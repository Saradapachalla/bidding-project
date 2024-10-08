export const mutations = `#graphql
    createUser(firstName: String!, lastName: String, email: String!, password: String!): String
    createJob(
        requirement: String!, 
        description: String!, 
        posterName: String!, 
        posterContact: String!, 
        lowestBid: number, 
        bidsCount: number,
        expirationDate: Date
    ): String
`;