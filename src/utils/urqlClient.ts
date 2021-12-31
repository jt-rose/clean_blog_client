import { withUrqlClient } from "next-urql";

export const withUrqlSSR = withUrqlClient((_ssrExchange, _ctx) => ({
  // ...add your Client options here
  url: "http://localhost:8080/query",
}));
