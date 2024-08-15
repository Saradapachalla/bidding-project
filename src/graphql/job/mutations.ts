export const mutations = `#graphql
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