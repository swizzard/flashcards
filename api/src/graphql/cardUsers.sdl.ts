export const schema = gql`
  type CardUser {
    id: String!
    externalAuthProvider: String!
    externalAuthId: String!
    stacks: [Stack]!
  }

  type Query {
    cardUsers: [CardUser!]! @requireAuth
    cardUser(id: String!): CardUser @requireAuth
  }

  input CreateCardUserInput {
    externalAuthProvider: String!
    externalAuthId: String!
  }

  input UpdateCardUserInput {
    externalAuthProvider: String
    externalAuthId: String
  }

  type Mutation {
    createCardUser(input: CreateCardUserInput!): CardUser! @requireAuth
    updateCardUser(id: String!, input: UpdateCardUserInput!): CardUser!
      @requireAuth
    deleteCardUser(id: String!): CardUser! @requireAuth
  }
`
