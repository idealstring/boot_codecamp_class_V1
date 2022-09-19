import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type IApolloSettingProps = {
  children: JSX.Element;
};

export default function ApolloSetting(P: IApolloSettingProps) {
  const { children } = P;
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
