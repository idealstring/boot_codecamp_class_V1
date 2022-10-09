import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

interface IApolloSettingProps {
  children: JSX.Element;
}

// 함수 내에는 계속 리렌더링이 되니까 캐쉬 부분을 따로 함수 밖으로 뺀 것.
const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  // 1. 프리렌더링 예제 - process.browser
  if (process.browser) {
    // console.log("지금은 브라우저!!");
    // const result = localStorage.getItem("accessToken");
    // console.log(result);
    // if (result) setAccessToken(result);
  } else {
    // console.log("(yarn dev로 실행된) 프론트서버!! ");
    // const result = localStorage.getItem("accessToken");
    // console.log(result);
    // if (result) setAccessToken(result);
  }

  // 2. 프리렌더링 예제 - typeof window
  if (typeof window !== "undefined") {
    // console.log("지금은 브라우저!!");
    // const result = localStorage.getItem("accessToken");
    // console.log(result);
    // if (result) setAccessToken(result);
  } else {
    // console.log("(yarn dev로 실행된) 프론트서버!! ");
    // const result = localStorage.getItem("accessToken");
    // console.log(result);
    // if (result) setAccessToken(result);
  }

  // 3. 프리렌더링 예제 - useEffect (프리렌더링 무시)
  // useEffect(() => {
  //   console.log("지금은 브라우저!!");
  //   const result = localStorage.getItem("accessToken");
  //   // console.log(result);
  //   if (result) setAccessToken(result);
  //   void router.push("/23-02-login-localstorage-success");
  // }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 로그인 인증을 해더에 넣어준 것.
  });

  const client = new ApolloClient({
    // uri: "http://backend09.codebootcamp.co.kr/graphql", // 이미지 기능 추가하며 위로 옮김
    link: ApolloLink.from([uploadLink]),
    // 관련 내용을 여기다라 링크 시킴. ApolloLink를 가져와서 링크하는데, 인증 등 여러가지 링크하게 되기때문에 배열로 받는다.
    cache: GLOBAL_STATE, // 페이지전환(_app.tsx 리렌더)되도, 캐시 유지.
    connectToDevTools: true,
  });
  // prettier-ignore
  return <ApolloProvider client={client}>
        {props.children}   
    </ApolloProvider>;
}
