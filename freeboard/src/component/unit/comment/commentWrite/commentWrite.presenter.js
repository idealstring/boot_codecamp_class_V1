import * as S from "./commentWrite.styles.js";

export default function CommentWritePresenter(P) {
  const {
    errorWord,
    onClickCreateCommentBtn,
    onclickUpdateBtn,
    onChangeWriter,
    onChangePassword,
    onChangeContents,
    onChangeRating,
    isEdit,
    comment,
  } = P;
  return (
    <>
      <S.HrLine />
      <S.CommentWrapper>
        <S.CommentTitle>
          <S.CommentTitleImg src="/comment.png" />
          댓글
        </S.CommentTitle>
        <S.CommentNonmemberWrapper>
          <S.CommentNameInfo>
            <S.InputW180H52
              type="text"
              placeholder="작성자"
              defaultValue={comment?.writer}
              onChange={onChangeWriter}
              disabled={isEdit ? true : false}
            />
            <S.InputW180H52
              type="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
            />
            <div className="별점" onChange={onChangeRating}>
              별 별 별 별 별
            </div>
          </S.CommentNameInfo>
          <S.CommentContentWrapper>
            <S.TextareaW1200
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={onChangeContents}
              defaultValue={comment?.contents}
            />
            <S.CommentContentBottom>
              <S.CharactersCounter>0/100</S.CharactersCounter>
              {isEdit ? (
                <S.CommentBtn onClick={onclickUpdateBtn}>수정하기</S.CommentBtn>
              ) : (
                <S.CommentBtn onClick={onClickCreateCommentBtn} isEdit={isEdit}>
                  등록하기{" "}
                </S.CommentBtn>
              )}
            </S.CommentContentBottom>
          </S.CommentContentWrapper>
          <S.ErrorDiv>{errorWord}</S.ErrorDiv>
        </S.CommentNonmemberWrapper>
      </S.CommentWrapper>
    </>
  );
}
