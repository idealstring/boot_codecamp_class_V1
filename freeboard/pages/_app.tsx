import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/style/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
