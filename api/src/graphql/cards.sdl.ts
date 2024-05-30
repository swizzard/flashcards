export const schema = gql`
  type Card {
    id: String!
    frontText: String
    frontImage: String
    back: String!
    stackId: String!
    stack: Stack!
  }

  type Query {
    cards: [Card!]! @requireAuth
    card(id: String!): Card @requireAuth
  }

  input CreateCardInput {
    frontText: String
    frontImage: String
    back: String!
    stackId: String!
  }

  input UpdateCardInput {
    frontText: String
    frontImage: String
    back: String
    stackId: String
  }

  type Mutation {
    createCard(input: CreateCardInput!): Card! @requireAuth
    updateCard(id: String!, input: UpdateCardInput!): Card! @requireAuth
    deleteCard(id: String!): Card! @requireAuth
  }
`
