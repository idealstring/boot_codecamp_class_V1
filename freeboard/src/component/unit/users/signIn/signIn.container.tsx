import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import SignInPresenter from "./signIn.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./signIn.queries";

export default function SignInContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const { data: fetchLoggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (email) {
      setErrorEmail(false);
    }
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password) {
      setErrorPassword(false);
    }
  };

  const onClickSignIn = async () => {
    if (!email && !password) {
      setErrorEmail(true);
      setErrorPassword(true);
      return;
    }
    if (!email) {
      setErrorEmail(true);
      return;
    }
    if (!password) {
      setErrorPassword(true);
      return;
    }

    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({ content: "로그인 실패. 다시 시도 바랍니다." });
        return;
      }
      setAccessToken(accessToken);
      moveToMyPage();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const moveToMyPage = () => {
    router.push(`/users/${fetchLoggedData?.fetchUserLoggedIn._id}`);
  };

  const onClickRePassword = () => {
    Modal.info({ content: "미완성 기능입니다." });
  };

  const onClickRegister = () => {
    router.push("/users/new");
  };

  return (
    <>
      <SignInPresenter
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickSignIn={onClickSignIn}
        onClickRePassword={onClickRePassword}
        onClickRegister={onClickRegister}
        errorEmail={errorEmail}
        errorPassword={errorPassword}
      />
    </>
  );
}
