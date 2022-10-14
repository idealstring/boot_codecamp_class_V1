import {
  dateFormatter,
  PointFormatter,
  PriceFormatter,
} from "../../../../commons/utils/utils";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./myPage.styles";
import { IMyPagePresenterProps } from "./myPage.types";

function MyPagePresenter(P: IMyPagePresenterProps) {
  const { fetchPointTransactions, fetchUserLoggedIn } = P;
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <div>
      <S.PointWrapper>
        <S.PointInnerWrapper>
          <S.PointTitle>사용 가능 포인트</S.PointTitle>
          <S.Point>
            {fetchUserLoggedIn?.fetchUserLoggedIn.userPoint
              ? PointFormatter(
                  fetchUserLoggedIn?.fetchUserLoggedIn.userPoint.amount
                )
              : null}{" "}
            P
          </S.Point>
        </S.PointInnerWrapper>
        <S.Word>적절한 구입이 생활에 도움이 됩니다.</S.Word>
      </S.PointWrapper>
      <S.HistoryTitleWrapper>
        <S.HistoryTitle>포인트 내역</S.HistoryTitle>
        <S.ChargeBtn onClick={onClickMoveToPage("/users/mypage/charge")}>
          충전하기
        </S.ChargeBtn>
      </S.HistoryTitleWrapper>
      <S.HistoryWrapper>
        <S.HistoryTH>날짜</S.HistoryTH>
        <S.HistoryTH>상태</S.HistoryTH>
        <S.HistoryTH>금액</S.HistoryTH>
        <S.HistoryTH>잔액</S.HistoryTH>
      </S.HistoryWrapper>
      {fetchPointTransactions?.fetchPointTransactions.map((el) => (
        <S.HistoryWrapper>
          <S.HistoryDate>{dateFormatter(el.createdAt)}</S.HistoryDate>
          <S.ChargePurchase>{el.status}</S.ChargePurchase>
          <S.IncreaDecrea>{PriceFormatter(el.amount)}</S.IncreaDecrea>
          <S.Balance>{PriceFormatter(el.balance)}</S.Balance>
        </S.HistoryWrapper>
      ))}
    </div>
  );
}

export default MyPagePresenter;
