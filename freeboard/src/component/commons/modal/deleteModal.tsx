import ModalContainer from "../../unit/modal/deleteModal.container";
import { IDeleteModalProps } from "../../unit/modal/deleteModal.types";

export default function DeleteModal(P: IDeleteModalProps) {
  const { onClickIsDeleteToggle, deleteBoardCommentFunc, setDeletePwd } = P;

  return (
    <ModalContainer
      setDeletePwd={setDeletePwd}
      onClickIsDeleteToggle={onClickIsDeleteToggle}
      deleteBoardCommentFunc={deleteBoardCommentFunc}
    />
  );
}
