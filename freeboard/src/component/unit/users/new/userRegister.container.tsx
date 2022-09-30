import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import UserRegisterPresenter from "./userRegister.presenter";

export default function UserRegisterContainer() {
  const router = useRouter();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });

  const onchangeInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };

  const onClickRegister = () => {};

  const onClickSignIn = () => {
    router.push("/users/signIn");
  };

  return (
    <>
      <UserRegisterPresenter
        onchangeInputData={onchangeInputData}
        onClickRegister={onClickRegister}
        onClickSignIn={onClickSignIn}
      />
    </>
  );
}
