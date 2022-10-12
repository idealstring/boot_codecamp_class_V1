import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

type IApolloSettingProps = {
  children: JSX.Element;
};

export default function ApolloSetting(P: IApolloSettingProps) {
  const { children } = P;
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 임시 사용
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) setAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
