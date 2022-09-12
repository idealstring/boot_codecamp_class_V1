import * as S from "./boardsDetail.styles";

export default function BoardDetailPresenter(P) {
  const {
    data,
    onRolloverLinkModal,
    onRolloverMapModal,
    modal,
    onClickLikeBtn,
    onClickDislikeBtn,
    onClickMoveToList,
    onClickMoveToEdit,
    onClickDeleteBtn,
  } = P;

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{data ? data.fetchBoard.title : "Loading..."}</S.Title>
        <S.TitleInfoTop>
          {data?.fetchBoard.images} {data?.fetchBoard.writer}{" "}
          {data?.fetchBoard.createdAt}
        </S.TitleInfoTop>
        <S.TitleInfoBottom className="세부정보2/이건 상황에 따라 삭제할수도">
          <S.IconWrapper>
            <S.LinkIcon
              src="/link_icon.png"
              onMouseOver={onRolloverLinkModal}
              // onMouseLeave={P.onRolloverLinkModal}
            />
          </S.IconWrapper>
          {modal.link ? (
            <S.LinkModal onMouseLeave={onRolloverLinkModal}>
              {data?.fetchBoard.youtubeUrl}
            </S.LinkModal>
          ) : null}
          <S.IconWrapper>
            <S.MapIcon
              src="/map_icon.png"
              onMouseOver={onRolloverMapModal}
              // onMouseLeave={P.onRolloverMapModal}
            />
          </S.IconWrapper>
          {modal.map ? (
            <S.MapModal onMouseLeave={onRolloverMapModal}>
              {data?.fetchBoard.boardAddress.address}
              <br />
              {data?.fetchBoard.boardAddress.addressDetail}
            </S.MapModal>
          ) : null}
        </S.TitleInfoBottom>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <S.ContentInner>{data?.fetchBoard.images}</S.ContentInner>
        <S.ContentInner>
          {data ? data.fetchBoard.contents : "Loading..."}
        </S.ContentInner>
        <S.LikeDislikeWrapper>
          <S.LikeDislikeInner onClick={onClickLikeBtn}>
            <img src="/like_icon.png" /> <div>{data?.fetchBoard.likeCount}</div>
          </S.LikeDislikeInner>
          <S.LikeDislikeInner onClick={onClickDislikeBtn}>
            <img src="/dislike_icon.png" />{" "}
            <div>{data?.fetchBoard.dislikeCount}</div>
          </S.LikeDislikeInner>
        </S.LikeDislikeWrapper>
      </S.ContentWrapper>
      <S.ContentBtnWrapper>
        <S.ContentBtn onClick={onClickMoveToList}>목록으로</S.ContentBtn>
        <S.ContentBtn onClick={onClickMoveToEdit}>수정하기</S.ContentBtn>
        <S.ContentBtn onClick={onClickDeleteBtn}>삭제하기</S.ContentBtn>
      </S.ContentBtnWrapper>
    </S.Container>
  );
}
