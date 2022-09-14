import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Page
export type IDeleteModalProps = {
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  setDeleteRun: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setDeletePwd: Dispatch<SetStateAction<string>>;
};

//container

export type IModalContainerProps = {
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  setDeleteRun: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setDeletePwd: Dispatch<SetStateAction<string>>;
};

//presenter

export type IModalPresenterProps = {
  onChangeInputPwd: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCancelBtn: () => void;
  onClickConfirmBtn: () => void;
};
