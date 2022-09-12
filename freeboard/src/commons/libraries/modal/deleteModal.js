import ModalContainer from "../../../component/commons/modal/deleteModal.container";

export default function Modal(P) {
  const { setIsDelete, setDeleteRun, setDeletePwd } = P;

  return (
    <ModalContainer
      setIsDelete={setIsDelete}
      setDeleteRun={setDeleteRun}
      setDeletePwd={setDeletePwd}
    />
  );
}
