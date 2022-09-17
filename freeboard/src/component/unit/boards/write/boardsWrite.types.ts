import { ChangeEvent, Dispatch, SetStateAction } from "react";
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
  updateBoardInput: IInnerupdateBoardInput;
};

export type IInnerupdateBoardInput = {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
  boardAddress: IUpdateBoardAddress;
};

export type IUpdateBoardAddress = {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
};

// presenter

export type IBoardWritePresenterProps = {
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
  setInputData: Dispatch<SetStateAction<IInputDateProps>>;
  inputData: IInputDateProps;
};

// styles
export type IErrorColorProps = {
  errorColor?: boolean;
};

export type ICompleteColorProps = {
  isCompleteColor?: boolean;
};
