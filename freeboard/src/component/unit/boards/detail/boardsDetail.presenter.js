import * as S from "./boardsDetail.styles";

export default function BoardDetailPresenter(P) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{P.data ? P.data.fetchBoard.title : "Loading..."}</S.Title>
        <S.TitleInfoTop>
          {P.data && P.data.fetchBoard.images}{" "}
          {P.data && P.data.fetchBoard.writer}{" "}
          {P.data && P.data.fetchBoard.createdAt}
        </S.TitleInfoTop>
        <S.TitleInfoBottom className="세부정보2/이건 상황에 따라 삭제할수도">
          <S.IconWrapper>
            <S.LinkIcon
              src="/link_icon.png"
              onMouseOver={P.onRolloverLinkModal}
              // onMouseLeave={P.onRolloverLinkModal}
            />
          </S.IconWrapper>
          {P.modal.link ? (
            <S.LinkModal onMouseLeave={P.onRolloverLinkModal}>
              {P.data && P.data.fetchBoard.youtubeUrl}
            </S.LinkModal>
          ) : null}
          <S.IconWrapper>
            <S.MapIcon
              src="/map_icon.png"
              onMouseOver={P.onRolloverMapModal}
              // onMouseLeave={P.onRolloverMapModal}
            />
          </S.IconWrapper>
          {P.modal.map ? (
            <S.MapModal onMouseLeave={P.onRolloverMapModal}>
              {P.data && P.data.fetchBoard.boardAddress.address}
              <br />
              {P.data && P.data.fetchBoard.boardAddress.addressDetail}
            </S.MapModal>
          ) : null}
        </S.TitleInfoBottom>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <S.ContentInner>{P.data && P.data.fetchBoard.images}</S.ContentInner>
        <S.ContentInner>
          {P.data ? P.data.fetchBoard.contents : "Loading..."}
        </S.ContentInner>
        <S.LikeDislikeWrapper>
          <S.LikeDislikeInner onClick={P.onclickLikeButton}>
            <img src="/like_icon.png" />{" "}
            <div>{P.data && P.data.fetchBoard.likeCount}</div>
          </S.LikeDislikeInner>
          <S.LikeDislikeInner onClick={P.onclickDislikeButton}>
            <img src="/dislike_icon.png" />{" "}
            <div>{P.data && P.data.fetchBoard.dislikeCount}</div>
          </S.LikeDislikeInner>
        </S.LikeDislikeWrapper>
      </S.ContentWrapper>
      <S.ContentButtonWrapper>
        <S.ContentButton>목록으로</S.ContentButton>
        <S.ContentButton>수정하기</S.ContentButton>
        <S.ContentButton>삭제하기</S.ContentButton>
      </S.ContentButtonWrapper>
      <S.HrLine />
      <S.CommentWrapper>
        <S.CommentTitle>
          <S.CommentTitleImg src="/comment.png" />
          댓글
        </S.CommentTitle>
        <S.CommentNonmemberWrapper>
          <S.CommentNameInfo>
            <S.InputW180H52 type="text" placeholder="작성자" />
            <S.InputW180H52 type="password" placeholder="비밀번화" />
            <div className="별점">별 별 별 별 별</div>
          </S.CommentNameInfo>
          <S.CommentContentWrapper>
            <S.InputW1200
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            <S.CommentContentBottom>
              <S.CharactersCounter>0/100</S.CharactersCounter>
              <S.CommentCreateButton>등록하기</S.CommentCreateButton>
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
            <S.InputW1200 type="text" />
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

        <S.CommentViewWrapper>
          <S.CommentViewInner>
            <S.CommentViewProfileWrapper>
              <img src="/profile_icon.png" />
            </S.CommentViewProfileWrapper>
            <S.CommentViewContentWrapper>
              <S.ViewContentTop>
                <S.CommentNameInfo>
                  <S.CommentContentName>이름</S.CommentContentName>
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
              <S.CommentViewContent>댓글내용이라니까요~~~</S.CommentViewContent>
              <S.CommentViewContentDate>댓글날짜</S.CommentViewContentDate>
            </S.CommentViewContentWrapper>
          </S.CommentViewInner>
        </S.CommentViewWrapper>
      </S.CommentWrapper>
    </S.Container>
  );
}
