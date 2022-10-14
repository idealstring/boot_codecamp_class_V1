import { useContext } from "react";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";
import { WindowSizeContext } from "../../../commons/responsive";
import * as S from "./basket.styles";

export default function BasketContainer() {
  const { isNormalScreen } = useContext(WindowSizeContext);

  return (
    <div>
      <S.PageTitle>내 장터</S.PageTitle>
      <div>
        <S.contentsButton>장바구니</S.contentsButton>
        <S.contentsButton>판매 내역</S.contentsButton>
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
  );
}
