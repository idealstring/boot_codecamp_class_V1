import { dateTimeFormatter } from "../../../../commons/utils/utils";
import * as S from "./boardsDetail.styles";

export default function BoardDetailPresenter(P) {
  const {
    data,
    onClickLinkModal,
    onClickMapModal,
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
          {data?.fetchBoard.images} {data?.fetchBoard.writer}
          {` `}
          {dateTimeFormatter(data?.fetchBoard.createdAt)}
        </S.TitleInfoTop>
        <S.TitleInfoBottom className="세부정보2/이건 상황에 따라 삭제할수도">
          <S.IconWrapper
            onClick={onClickLinkModal}
            // onMouseLeave={P.onRolloverLinkModal}
          >
            <svg
              width="28"
              height="14"
              viewBox="0 0 28 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6666 0.333496H15.3333V3.00016H20.6666C22.8666 3.00016 24.6666 4.80016 24.6666 7.00016C24.6666 9.20016 22.8666 11.0002 20.6666 11.0002H15.3333V13.6668H20.6666C24.3466 13.6668 27.3333 10.6802 27.3333 7.00016C27.3333 3.32016 24.3466 0.333496 20.6666 0.333496ZM12.6666 11.0002H7.33329C5.13329 11.0002 3.33329 9.20016 3.33329 7.00016C3.33329 4.80016 5.13329 3.00016 7.33329 3.00016H12.6666V0.333496H7.33329C3.65329 0.333496 0.666626 3.32016 0.666626 7.00016C0.666626 10.6802 3.65329 13.6668 7.33329 13.6668H12.6666V11.0002ZM8.66663 5.66683H19.3333V8.3335H8.66663V5.66683Z"
                fill="#FFD600"
              />
            </svg>
          </S.IconWrapper>
          {modal.link ? (
            <S.LinkModal onMouseLeave={onClickLinkModal}>
              {data?.fetchBoard.youtubeUrl}
            </S.LinkModal>
          ) : null}
          <S.IconWrapper>
            <S.MapIcon
              src="/map_icon.png"
              onClick={onClickMapModal}
              // onMouseLeave={P.onRolloverMapModal}
            />
          </S.IconWrapper>
          {modal.map ? (
            <S.MapModal onMouseLeave={onClickMapModal}>
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
          <S.LikeWrapper onClick={onClickLikeBtn}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.11 3.72L10.54 6.61C10.42 7.2 10.58 7.81 10.96 8.27C11.34 8.73 11.9 9 12.5 9H18V10.08L15.43 16H7.34C7.16 16 7 15.84 7 15.66V7.82L11.11 3.72ZM12 0L5.59 6.41C5.21 6.79 5 7.3 5 7.83V15.66C5 16.95 6.05 18 7.34 18H15.44C16.15 18 16.8 17.63 17.16 17.03L19.83 10.88C19.94 10.63 20 10.36 20 10.08V9C20 7.9 19.1 7 18 7H12.5L13.42 2.35C13.47 2.13 13.44 1.89 13.34 1.69C13.11 1.24 12.82 0.83 12.46 0.47L12 0ZM2 7H0V18H2C2.55 18 3 17.55 3 17V8C3 7.45 2.55 7 2 7Z"
                fill="#FFD600"
              />
            </svg>
            <div>{data?.fetchBoard.likeCount}</div>
          </S.LikeWrapper>
          <S.DislikeWrapper onClick={onClickDislikeBtn}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0H5C4.17 0 3.46 0.5 3.16 1.22L0.14 8.27C0.05 8.5 0 8.74 0 9V11C0 12.1 0.9 13 2 13H8.31L7.36 17.57L7.33 17.89C7.33 18.3 7.5 18.68 7.77 18.95L8.83 20L15.42 13.41C15.78 13.05 16 12.55 16 12V2C16 0.9 15.1 0 14 0ZM14 12L9.66 16.34L11 11H2V9L5 2H14V12ZM18 0H22V12H18V0Z"
                fill="#828282"
              />
            </svg>

            <div>{data?.fetchBoard.dislikeCount}</div>
          </S.DislikeWrapper>
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
