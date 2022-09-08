import * as S from "./commentWrite.styles";

export default function CommentWritePresenter(P) {
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
              value={P.writer}
              onChange={P.onChangeWriter}
            />
            <S.InputW180H52
              type="password"
              placeholder="비밀번화"
              onChange={P.onChangePassword}
              value={P.password}
            />
            <div className="별점" onChange={P.onChangeRating}>
              별 별 별 별 별
            </div>
          </S.CommentNameInfo>
          <S.CommentContentWrapper>
            <S.TextareaW1200
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={P.onChangeContents}
              value={P.contents}
            />
            <S.CommentContentBottom>
              <S.CharactersCounter>0/100</S.CharactersCounter>
              <S.CommentCreateButton onClick={P.onClickCreateCommentButton}>
                등록하기
              </S.CommentCreateButton>
            </S.CommentContentBottom>
          </S.CommentContentWrapper>
        </S.CommentNonmemberWrapper>

        <S.CommentNonmemberWrapper className="비회원글수정래퍼">
          <S.CommentNameInfo className="래퍼글쓴이정보와별점">
            <S.InputW180H52 type="text" />
            <S.InputW180H52 type="password" />
            <div className="별점">별 별 별 별 별</div>
          </S.CommentNameInfo>
          <S.CommentContentWrapper className="댓글콘텐츠래퍼">
            <S.TextareaW1200 type="text" />
            <S.CommentContentBottom className="래퍼글자수확인">
              <S.CharactersCounter className="글자수확인">
                0/100
              </S.CharactersCounter>
              <S.CommentUpdateButton className="등록하기버튼">
                수정하기
              </S.CommentUpdateButton>
            </S.CommentContentBottom>
          </S.CommentContentWrapper>
        </S.CommentNonmemberWrapper>
      </S.CommentWrapper>
    </>
  );
}
