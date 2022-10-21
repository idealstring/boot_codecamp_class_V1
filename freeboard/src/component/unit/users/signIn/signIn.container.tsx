import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import SignInPresenter from "./signIn.presenter";
import { LOGIN_USER } from "./signIn.queries";
import * as yup from "yup";
import { IOnClickSignInProps } from "./signIn.types";

export default function SignInContainer() {
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().email().required(`false`),
    password: yup.string().required(`false`),
  });

  const onClickSignIn = async (data: IOnClickSignInProps) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({ content: "로그인 실패. 다시 시도 바랍니다." });
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      router.push(`/users/mypage`);
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
        onClickSignIn={onClickSignIn}
        onClickRePassword={onClickRePassword}
        onClickRegister={onClickRegister}
        schema={schema}
      />
    </>
  );
}
