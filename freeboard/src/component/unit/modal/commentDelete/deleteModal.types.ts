import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Page
export type IDeleteModalProps = {
  onClickIsDeleteToggle: () => void;
  deleteBoardCommentFunc: () => void;
  setDeletePwd: Dispatch<SetStateAction<string>>; // (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

// container

export type IModalContainerProps = {
  onClickIsDeleteToggle: () => void;
  deleteBoardCommentFunc: () => void;
  setDeletePwd: Dispatch<SetStateAction<string>>;
};

// presenter

export type IModalPresenterProps = {
  onClickIsDeleteToggle: () => void;
  onChangeInputPwd: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickConfirmBtn: () => void;
};
