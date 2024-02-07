import { gql } from "@apollo/client";

export const GET_BOOKS_QUERY = gql`
  query GetBooks {
    getBooks {
      title
      publishedAt
    }
  }
`;
