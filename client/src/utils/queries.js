// Import GraphQL Apollo/client
// import { gql } from "@apollo/client";

//  GraphQL query to fetch the current authenticated user's information
export const GET_ME = `
{
  me {
    _id
    username
    email
    savedBooks {
      title
      bookId
      authors
      description
      image
      link
    }
  }
}
`;
