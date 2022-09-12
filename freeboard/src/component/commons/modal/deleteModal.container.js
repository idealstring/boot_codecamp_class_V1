import { useState } from "react";
import ModalPresenter from "./deleteModal.presenter";

export default function ModalContainer(P) {
  const { setIsDelete, setDeleteRun, setDeletePwd } = P;

  const onChangeInputPwd = (e) => {
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
