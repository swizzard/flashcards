export const schema = gql`
  type Stack {
    id: String!
    title: String
    userId: String!
    user: CardUser!
    cards: [Card]!
  }

  type DashboardStack {
    id: String!
    title: String
    cardCount: Int!
  }

  type DashboardSummary {
    stacks: [DashboardStack]!
  }

  type Query {
    dashboardSummary: DashboardSummary! @requireAuth
    stacks: [Stack!]! @requireAuth
    stack(id: String!): Stack @requireAuth
  }

  input CreateStackInput {
    title: String
  }

  input UpdateStackInput {
    title: String
  }

  type Mutation {
    createStack(input: CreateStackInput!): Stack! @requireAuth
    updateStack(id: String!, input: UpdateStackInput!): Stack! @requireAuth
    deleteStack(id: String!): Stack! @requireAuth
  }
`
