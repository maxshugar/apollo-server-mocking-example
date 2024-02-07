import { gql } from "@apollo/client";

export const ADD_BOOK_MUTATION = gql`
  mutation AddBook($input: AddBookInput!) {
    addBook(input: $input)
  }
`;
