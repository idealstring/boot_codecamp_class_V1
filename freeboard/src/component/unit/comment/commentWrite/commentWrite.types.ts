//page

import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type ICommentWriteProps = {
  comment: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
};

//container

export type ICommentWriteContainerProps = {
  comment?: any;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
};

//presenter

export type ICommentWritePresenterProps = {
  writer: string;
  pwd: string;
  rating: number;
  contents: string;
  errorWriter: boolean;
  errorPwd: boolean;
  errorContents: boolean;
  errorRating: number;
  onClickCreateBtn: () => void;
  onClickUpdateBtn: () => void;
  onClickCancelBtn: () => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePwd: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (e: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  comment: any;
};

//styles

export type IErrorColorProps = {
  errorColor: boolean;
};

export type IIsCancelIsEditProps = {
  isCancel?: boolean;
  isEdit?: boolean;
};
