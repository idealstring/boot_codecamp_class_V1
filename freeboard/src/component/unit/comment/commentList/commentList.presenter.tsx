import { IQuery } from "../../../../commons/types/generated/types";
import CommentListPresenterItem from "./commentList.presenterItem";
import * as S from "./commentList.styles";
import { ICommentListPresenterProps } from "./commentList.types";

export default function CommentListPresenter(P: ICommentListPresenterProps) {
  const { existingData } = P;

  return (
    <S.CommentWrapper>
      {existingData?.fetchBoardComments.map((comment) => (
        <CommentListPresenterItem key={comment._id} comment={comment} />
      ))}
    </S.CommentWrapper>
  );
}
