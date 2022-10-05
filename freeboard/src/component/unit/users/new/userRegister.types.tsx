export type IUserRegisterPresenterProps = {
  onClickRegister: (data: IOnClickRegisterProps) => void;
  onClickSignIn: () => void;
};

export type IOnClickRegisterProps = {
  email: string;
  password: string;
  name: string;
};
