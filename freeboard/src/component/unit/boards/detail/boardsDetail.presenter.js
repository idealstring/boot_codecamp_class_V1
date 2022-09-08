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
        <S.ContentButton onClick={P.onClickMoveToList}>
          목록으로
        </S.ContentButton>
        <S.ContentButton onClick={P.onClickMoveToEdit}>
          수정하기
        </S.ContentButton>
        <S.ContentButton>삭제하기</S.ContentButton>
      </S.ContentButtonWrapper>
    </S.Container>
  );
}
