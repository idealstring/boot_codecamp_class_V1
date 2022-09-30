import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import SignInPresenter from "./signIn.presenter";
import { LOGIN_USER } from "./signIn.queries";

export default function SignInContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const router = useRouter();

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
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
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
