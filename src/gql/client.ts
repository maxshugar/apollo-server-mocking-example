import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { schemaWithMocks } from "./schema";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const httpLink = createHttpLink({ uri: API_URL });
const schemaLink = new SchemaLink({ schema: schemaWithMocks });

export const apolloClient = new ApolloClient({
  link: API_URL ? httpLink : schemaLink,
  cache: new InMemoryCache(),
});
