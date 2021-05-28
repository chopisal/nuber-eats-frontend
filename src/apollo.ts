import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return false;
              // return isLoggedInVar();
            },
          },
          token: {
            read() {
              return "aa";
              // return authTokenVar();
            },
          },
        },
      },
    },
  }),
});
