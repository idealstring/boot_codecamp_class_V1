import { BaseSyntheticEvent, ChangeEvent } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  FormState,
  Merge,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  useFormState,
} from "react-hook-form";

// container

export type ICommentWriteContainerProps = {
  questions?: any;
  onClickIsEditToggle: () => void;
  isEdit: boolean;
};

export type IMyVariables = {
  useditemQuestionId: string;
  updateUseditemQuestionInput: IUpdateMarketCommentInput;
};

export type IUpdateMarketCommentInput = {
  contents?: string;
};

// presenter

export type ICommentWritePresenterProps = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: (
    data?: any
  ) => (e?: BaseSyntheticEvent<any> | undefined) => Promise<any>;
  formState: FormState<FieldValues>;
  onClickCreateBtn: (data: SubmitHandler<FieldValues>) => Promise<void>;
  onClickUpdateBtn: (data: SubmitHandler<FieldValues>) => Promise<void>;
  onClickCancelBtn: () => void;
  isEdit: boolean;
  questions: any;
  getValues?: UseFormGetValues<FieldValues>;
};

// styles

export type ICommentWriteStyleProps = {
  errorColor?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  isCancel?: boolean;
  isEdit?: boolean;
  isMobile?: boolean;
};
