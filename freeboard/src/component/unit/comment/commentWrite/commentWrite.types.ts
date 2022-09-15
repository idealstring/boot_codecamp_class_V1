import { ChangeEvent, Dispatch, ReactPropTypes, SetStateAction } from "react";

//container

export type ICommentWriteContainerProps = {
  comment?: any;
  onClickIsEditToggle: () => void;
  isEdit: boolean;
};

export type IMyVariables = {
  boardCommentId: string;
  password: string;
  updateBoardCommentInput: {
    contents?: string;
    rating?: number;
  };
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
  errorRating: boolean;
  onClickCreateBtn: () => void;
  onClickUpdateBtn: () => void;
  onClickCancelBtn: () => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePwd: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (e: number) => void;
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
