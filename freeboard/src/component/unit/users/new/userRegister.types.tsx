import { ChangeEvent } from "react";

export type IUserRegisterPresenterProps = {
  onchangeInputData: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRegister: () => void;
  onClickSignIn: () => void;
};
