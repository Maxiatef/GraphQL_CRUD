export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String]!
    reviews: [Review]!
},
type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review]!
}
type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}
type Mutation {
    DeleteGame(id: ID!): [Game]
    AddGame(game: GameInput!): Game
    EditGame(id: ID!, game: EditGameInput!): Game
}
input GameInput {
    title: String!
    platform: [String]!
}
input EditGameInput {
    title: String
    platform: [String]
}
`