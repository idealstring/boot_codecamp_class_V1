import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/style/globalStyle";
import Layout from "../src/component/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <>
          <Global styles={GlobalStyle} />
          <Component {...pageProps} />
        </>
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
