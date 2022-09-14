import { ChangeEvent } from "react";
import ModalPresenter from "./deleteModal.presenter";
import { IModalContainerProps } from "./deleteModal.types";

export default function ModalContainer(P: IModalContainerProps) {
  const { setIsDelete, setDeleteRun, setDeletePwd } = P;

  const onChangeInputPwd = (e: ChangeEvent<HTMLInputElement>) => {
    setDeletePwd(e.target.value);
  };

  const onClickCancelBtn = () => {
    setIsDelete(false);
  };

  const onClickConfirmBtn = () => {
    setDeleteRun(true);
  };

  return (
    <ModalPresenter
      onChangeInputPwd={onChangeInputPwd}
      onClickCancelBtn={onClickCancelBtn}
      onClickConfirmBtn={onClickConfirmBtn}
    />
  );
}
