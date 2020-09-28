const { ApolloServer, gql } = require("apollo-server");

let data = {
  bookCount: 5,
  authorCount: 7,
};

const typeDefs = gql`
  type Query {
    bookCount: Int!
    authorCount: Int!
  }
`;

const resolvers = {
  Query: {
    bookCount: () => data.bookCount,
    authorCount: () => data.authorCount,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
