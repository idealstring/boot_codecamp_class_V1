import CommentWriteContainer from "../../../component/unit/comment/commentWrite/commentWrite.container";
import { ICommentWriteProps } from "../../../component/unit/comment/commentWrite/commentWrite.types";

export default function CommentWrite(P: ICommentWriteProps) {
  const { comment, setIsEdit, isEdit } = P;
  return (
    <CommentWriteContainer
      comment={comment}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
    />
  );
}
