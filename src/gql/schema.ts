import { gql } from "@apollo/client";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mocks } from "./mocks";

const typeDefs = gql`
  type Book {
    title: String!
    publishedAt: String!
  }

  input AddBookInput {
    title: String!
    publishedAt: String!
  }

  type Query {
    getBooks: [Book]
  }

  type Mutation {
    addBook(input: AddBookInput): ID!
  }
`;

const schema = makeExecutableSchema({ typeDefs });
export const schemaWithMocks = addMocksToSchema({ schema, mocks });
