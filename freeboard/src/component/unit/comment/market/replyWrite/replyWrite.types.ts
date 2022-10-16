import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type IReplayWriteContainerProps = {
  questionsId: string;
};

// presenter

export type IReplayWritePresenterProps = {
  onClickCreateAnswer: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
};

// styles

export type IReplyWriteStyleProps = {
  isMobile?: boolean;
  errorColor:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};
