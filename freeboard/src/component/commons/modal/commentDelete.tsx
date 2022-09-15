import ModalContainer from "../../unit/modal/commentDelete/deleteModal.container";
import { IDeleteModalProps } from "../../unit/modal/commentDelete/deleteModal.types";

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
