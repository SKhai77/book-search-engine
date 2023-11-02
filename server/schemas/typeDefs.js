// Defining GraphQL type definitions
const typeDefs = `
  # Defining a "User" type with it values
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  # Defining "Book" type with it values
  type Book {
    authors: [String]
    description: String
    bookId: ID!
    image: String
    link: String
    title: String!
  }

  # Defining an "Auth" type with it values
  type Auth {
    token: ID!
    user: User
  }

  # Defining a "Query" type 'me' to the 'User'
  type Query {
    me: User
  }

  # Defining an input type "SavedBookInput' for saving a book
  input SavedBookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  # Defining the "Mutation" types
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
  }
`;

// Exports the "type definitions"
module.exports = typeDefs;
