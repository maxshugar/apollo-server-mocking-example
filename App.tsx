import { ApolloProvider } from '@apollo/client';
import { AddBookButton } from './src/components/addBookButton';
import { BookList } from './src/components/bookList';
import { apolloClient } from './src/gql/client';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BookList />
      <AddBookButton />
    </ApolloProvider>
  );
}
