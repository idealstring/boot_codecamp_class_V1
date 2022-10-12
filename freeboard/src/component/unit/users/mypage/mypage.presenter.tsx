import { useContext } from "react";
import * as S from "./myPage.styles";
import { IMyPagePresenterProps } from "./myPage.types";
import { WindowSizeContext } from "../../../commons/responsive";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";

function MyPagePresenter(P: IMyPagePresenterProps) {
  const { fetchLoggedData, onClickLogOut } = P;
  const { isNormalScreen } = useContext(WindowSizeContext);

  return (
    <>
      <S.Container isNormalScreen={isNormalScreen}>
        <S.ProfileWrapper isNormalScreen={isNormalScreen}>
          <S.ProfileTop isNormalScreen={isNormalScreen}>
            <img src="/" style={{ width: "120px", height: "120px" }} />
            <S.NicknameWrapper isNormalScreen={isNormalScreen}>
              <span>{fetchLoggedData?.fetchUserLoggedIn.name}</span>
              <S.BtnWrapper isNormalScreen={isNormalScreen}>
                <S.EditButton>설정</S.EditButton>
                <S.LogoutBtn onClick={onClickLogOut}>로그아웃</S.LogoutBtn>
              </S.BtnWrapper>
            </S.NicknameWrapper>
          </S.ProfileTop>
          <S.ProfileBottom>
            <S.BottomButton>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M430.8 877.1h-0.33c-47.77-0.18-86.61-39.18-86.59-86.92 0.28-47.74 38.9-86.37 86.37-86.87 0.49-0.05 1.01-0.05 1.48-0.05 47.75 0.52 86.32 39.8 85.97 87.55-0.34 47.64-39.29 86.29-86.9 86.29z m0.37-140.6c-29.69 0-53.93 24.06-54.1 53.78-0.02 29.43 24.01 53.52 53.54 53.63h0.2c29.43 0 53.5-23.88 53.72-53.34 0.21-29.15-23.03-53.2-52.03-54.1-0.34 0.02-0.68 0.05-1.02 0.03h-0.31zM741.08 877.1h-0.33c-47.74-0.18-86.59-39.16-86.59-86.92 0.28-47.74 38.9-86.37 86.37-86.87 0.49-0.05 1.04-0.05 1.48-0.05 47.76 0.52 86.32 39.8 85.98 87.55-0.35 47.64-39.31 86.29-86.91 86.29z m0.36-140.6c-29.69 0-53.93 24.06-54.1 53.78 0 29.43 24.01 53.52 53.54 53.63h0.2c29.43 0 53.5-23.88 53.72-53.34 0.21-29.15-23.03-53.2-52.04-54.1-0.34 0.02-0.71 0.05-1.02 0.03h-0.3zM373.15 666.52h-39.8c-5.83 0-11.04-3.03-14.01-7.7-2.11-2.74-3.37-6.09-3.37-9.72v-2.9l-55.54-466.11H80.59c-9.16 0-16.59-7.42-16.59-16.59s7.43-16.59 16.59-16.59h194.57c8.4 0 15.48 6.29 16.48 14.63l56.22 471.8h20.34c1.54-0.53 3.15-0.83 4.8-0.83h459.27l94.9-444.21c1.92-8.96 10.74-14.78 19.7-12.75 8.96 1.91 14.67 10.73 12.76 19.69l-97.51 456.41c-1.34 6.29-6.15 11.1-12.16 12.62-1.98 0.91-4.14 1.43-6.42 1.43h-465.6c-1.53 0.53-3.14 0.82-4.79 0.82z" />
                <path d="M917.71 319.87H316.15c-9.16 0-16.59-7.42-16.59-16.59s7.43-16.59 16.59-16.59h601.56c9.16 0 16.59 7.42 16.59 16.59s-7.42 16.59-16.59 16.59z" />
              </svg>
              <span>내 장터</span>
            </S.BottomButton>
            <S.BottomButton>
              <svg
                width={31}
                height={31}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M929.171 696.364C928.371 821.492 737.683 927.071 512 927.071S95.629 821.492 94.829 696.364c-9.836-8.606-19.062-17.523-27.646-26.753C65.757 678.155 65 686.823 65 695.585 65 841.091 265.131 959 512 959c246.868 0 447-117.909 447-263.415 0-8.762-0.757-17.43-2.183-25.974C948.232 678.841 939.007 687.758 929.171 696.364z" />
                <path d="M929.171 520.754C928.371 645.883 737.683 751.461 512 751.461S95.629 645.883 94.829 520.754c-9.836-8.605-19.062-17.523-27.646-26.753C65.757 502.544 65 511.213 65 519.976c0 145.504 200.131 263.415 447 263.415 246.868 0 447-117.911 447-263.415 0-8.763-0.757-17.432-2.183-25.975C948.232 503.23 939.007 512.148 929.171 520.754z" />
                <path d="M512 591.815c246.868 0 447-117.91 447-263.416C959 182.941 758.868 65 512 65 265.131 65 65 182.941 65 328.4 65 473.905 265.131 591.815 512 591.815zM512 96.929c226.148 0 417.2 106 417.2 231.471 0 125.472-191.052 231.487-417.2 231.487S94.8 453.872 94.8 328.4C94.8 202.928 285.852 96.929 512 96.929z" />
              </svg>
              <span>포인트</span>
            </S.BottomButton>
          </S.ProfileBottom>
        </S.ProfileWrapper>
        <S.contentsWrapper isNormalScreen={isNormalScreen}>
          <div>
            <S.PageTitle>내 장터</S.PageTitle>
            <div>
              <S.contentsButton>장바구니</S.contentsButton>
              <S.contentsButton>거래 내역</S.contentsButton>
              <S.contentsButton>판매 내역</S.contentsButton>
              <S.contentsButton>구매 내역</S.contentsButton>
            </div>
            <S.BoardWrapper>
              <S.BoardTopWrapper>
                <S.BoardThNumber>번호</S.BoardThNumber>
                <S.BoardThTitle>상품명</S.BoardThTitle>
                <S.BoardThSell>판매여부</S.BoardThSell>
                <S.BoardThPrice>가격</S.BoardThPrice>
                <S.BoardThDate>날짜</S.BoardThDate>
              </S.BoardTopWrapper>
              <S.BoardBodyWrapper key={1}>
                <S.ContentNumber>번호</S.ContentNumber>
                <S.ContentTitle>상품명</S.ContentTitle>
                <S.ContentSell>판매여부</S.ContentSell>
                <S.ContentPrice>가격</S.ContentPrice>
                <S.ContentDate>날짜</S.ContentDate>
              </S.BoardBodyWrapper>
              <PageNation02 />
            </S.BoardWrapper>
          </div>
        </S.contentsWrapper>
      </S.Container>
    </>
  );
}

export default MyPagePresenter;
