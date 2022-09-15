import { ChangeEvent } from "react";
import ModalPresenter from "./deleteModal.presenter";
import { IModalContainerProps } from "./deleteModal.types";

export default function ModalContainer(P: IModalContainerProps) {
  const { onClickIsDeleteToggle, deleteBoardCommentFunc, setDeletePwd } = P;

  const onChangeInputPwd = (e: ChangeEvent<HTMLInputElement>) => {
    setDeletePwd(e.target.value);
  };

  return (
    <ModalPresenter
      onChangeInputPwd={onChangeInputPwd}
      onClickIsDeleteToggle={onClickIsDeleteToggle}
      onClickConfirmBtn={deleteBoardCommentFunc}
    />
  );
}
