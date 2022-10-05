import { FieldError } from "rc-field-form/lib/interface";

export type ISignInPresenterProps = {
  onClickSignIn: () => void;
  onClickRePassword: () => void;
  onClickRegister: () => void;
};

export type IOnClickSignInProps = {
  email: string;
  password: string;
};

export type IErrorProps = {
  error?:
    | string
    | FieldError
    | any
    // | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
