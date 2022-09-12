import CommentWriteContainer from "../../../component/unit/comment/commentWrite/commentWrite.container";

export default function CommentWrite(P) {
  const { comment, setIsEdit, isEdit } = P;
  return (
    <CommentWriteContainer
      comment={comment}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
    />
  );
}
