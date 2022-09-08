import * as S from "./commentList.styles";

export default function CommentListPresenter(P) {
  return (
    <S.CommentWrapper>
      {P.data?.fetchBoardComments.map((comment) => (
        <S.CommentViewWrapper key={comment._id}>
          <S.CommentViewInner>
            <S.CommentViewProfileWrapper>
              <img src="/profile_icon.png" />
            </S.CommentViewProfileWrapper>
            <S.CommentViewContentWrapper>
              <S.ViewContentTop>
                <S.CommentNameInfo>
                  <S.CommentContentName>{comment.writer}</S.CommentContentName>
                  <div>별 별 별 별 별</div>
                </S.CommentNameInfo>
                <S.CommentViewButtonWrapper>
                  <button>
                    <img src="/update_icon.png" />
                  </button>
                  <button>
                    <img src="/delete_icon.png" />
                  </button>
                </S.CommentViewButtonWrapper>
              </S.ViewContentTop>
              <S.CommentViewContent>{comment.contents}</S.CommentViewContent>
              <S.CommentViewContentDate>
                {comment.createAt}
              </S.CommentViewContentDate>
            </S.CommentViewContentWrapper>
          </S.CommentViewInner>
        </S.CommentViewWrapper>
      ))}
    </S.CommentWrapper>
  );
}
