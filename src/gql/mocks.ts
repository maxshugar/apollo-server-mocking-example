export const mocks = {
  Book: () => ({
    title: () => "Book Title",
    publishedAt: () => "2021-01-01",
  }),
  Query: () => ({
    getBooks: () => [
      { title: "Title 1", publishedAt: "2021-01-01" },
      { title: "Title 2", publishedAt: "2021-01-02" },
      { title: "Title 3", publishedAt: "2021-01-03" },
      { title: "Title 4", publishedAt: "2021-01-04" },
      { title: "Title 5", publishedAt: "2021-01-05" },
    ],
  }),
  Mutation: () => ({
    addBook: () => "123",
  }),
};
