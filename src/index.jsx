const  ApolloClient = require("apollo-client");
const  InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
const NormalizedCacheObject = require("apollo-cache-inmemory").NormalizedCacheObject;
const  HttpLink = require("apollo-link-http");

const  ApolloProvider = require("@apollo/react-hooks");
const React = require("react");
const ReactDOM = require("react-dom");
const Pages = require("./pages");
const injectStyles = require("./styles");

// previous variable declarations


injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);