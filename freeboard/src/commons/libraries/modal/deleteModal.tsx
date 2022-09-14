import ModalContainer from "../../../component/commons/modal/deleteModal.container";
import { IDeleteModalProps } from "../../../component/commons/modal/deleteModal.types";

export default function DeleteModal(P: IDeleteModalProps) {
  const { setIsDelete, setDeleteRun, setDeletePwd } = P;

  return (
    <ModalContainer
      setIsDelete={setIsDelete}
      setDeleteRun={setDeleteRun}
      setDeletePwd={setDeletePwd}
    />
  );
}
