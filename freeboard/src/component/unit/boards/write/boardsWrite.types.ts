import { AllHTMLAttributes, ChangeEvent, HTMLAttributes } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// container

export type IBoardWriteContainerProps = {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
};

export type IInputDateProps = {
  writer: string;
  pwd: string;
  contentTitle: string;
  contentText: string;
  zipcode: string;
  addressCity: string;
  addressDetail: string;
  youtubeLink: string;
  images: any;
};

export type IMyVrivables = {
  boardId: string;
  password: string;
  updateBoardInput: {
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    images?: string;
    boardAddress: {
      zipcode?: string | undefined;
      address?: string | undefined;
      addressDetail?: string | undefined;
    };
  };
};

//presenter

export interface IBoardWritePresenterProps {
  errorPwd: boolean;
  errorWriter: boolean;
  errorContentTitle: boolean;
  errorContent: boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePwd: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContentTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContentText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeZipcode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressCity: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeLink: (event: ChangeEvent<HTMLInputElement>) => void;
  CreateBtn: () => void;
  UpdateBtn: () => void;
  CreateCancelBtn: () => void;
  UpdateCancelBtn: () => void;
  isCompleteColor: boolean;
  isEdit: boolean;
  existingData?: Pick<IQuery, "fetchBoard">;
}

//styles
export interface IErrorColorProps {
  errorColor?: boolean;
}

export type ICompleteColorProps = {
  isCompleteColor?: boolean;
};
