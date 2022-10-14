import Link from "next/link";
import * as S from "./Sales.styles";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils/utils";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";

const FETCH_USEDITEMS_ISOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      seller {
        name
      }
      soldAt
      createdAt
    }
  }
`;

export default function SalesContainer() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USEDITEMS_ISOLD, { variables: { search: "", page: 1 } });

  return (
    <div>
      <S.PageTitle>판매 내역</S.PageTitle>
      <div>
        <S.contentsButton>장바구니</S.contentsButton>
        <S.contentsButton>판매내역</S.contentsButton>
      </div>
      <S.BoardWrapper>
        <S.BoardTopWrapper>
          <S.BoardThNumber>상품ID</S.BoardThNumber>
          <S.BoardThTitle>상품명</S.BoardThTitle>
          <S.BoardThSell>판매여부</S.BoardThSell>
          <S.BoardThPrice>가격</S.BoardThPrice>
          <S.BoardThDate>날짜</S.BoardThDate>
        </S.BoardTopWrapper>
        {data?.fetchUseditemsISold.map((soldItem, i) => (
          <Link href={`/market/${soldItem._id}`}>
            <a>
              <S.BoardBodyWrapper key={i}>
                <S.ContentNumber>{soldItem._id}</S.ContentNumber>
                <S.ContentTitle>{soldItem.name}</S.ContentTitle>
                <S.ContentSell>
                  {soldItem.soldAt ? "판매완료" : null}
                </S.ContentSell>
                <S.ContentPrice>
                  {PriceFormatter(soldItem.price)}
                </S.ContentPrice>
                <S.ContentDate>
                  {dateFormatter(soldItem.createdAt)}
                </S.ContentDate>
              </S.BoardBodyWrapper>
            </a>
          </Link>
        ))}
        <PageNation02 />
      </S.BoardWrapper>
    </div>
  );
}
