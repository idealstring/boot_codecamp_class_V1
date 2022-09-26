import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    // uri: "http://backend09.codebootcamp.co.kr/graphql", // 이미지 기능 추가하며 위로 옮김
    link: ApolloLink.from([uploadLink]),
    // 관련 내용을 여기다라 링크 시킴. ApolloLink를 가져와서 링크하는데, 인증 등 여러가지 링크하게 되기때문에 배열로 받는다.
    cache: new InMemoryCache(),
  });
  // prettier-ignore
  return <ApolloProvider client={client}>
        {props.children}   
    </ApolloProvider>;
}
