import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import UserRegisterPresenter from "./userRegister.presenter";
import { CREATE_USER } from "./userRegister.queries";
import { IOnClickRegisterProps } from "./userRegister.types";

export default function UserRegisterContainer() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const onClickRegister = async (data: IOnClickRegisterProps) => {
    console.log(data);
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      console.log(result);
      router.push("/users/signIn");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickSignIn = () => {
    router.push("/users/signIn");
  };

  return (
    <>
      <UserRegisterPresenter
        onClickRegister={onClickRegister}
        onClickSignIn={onClickSignIn}
      />
    </>
  );
}
