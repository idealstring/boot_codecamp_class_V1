import CommentListPresenterItem from "./commentList.presenterItem";
import * as S from "./commentList.styles";

export default function CommentListPresenter(P) {
  const { existingData, onClickUpdateBtn, isEdit } = P;

  return (
    <S.CommentWrapper>
      {existingData?.fetchBoardComments.map((comment) => (
        <CommentListPresenterItem key={comment._id} comment={comment} />
      ))}
    </S.CommentWrapper>
  );
}
