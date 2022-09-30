import { ChangeEvent } from "react";

export type ISignInPresenterProps = {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSignIn: () => void;
  onClickRePassword: () => void;
  onClickRegister: () => void;
  errorEmail: boolean;
  errorPassword: boolean;
};

export type IErrorProps = {
  error: boolean;
};
