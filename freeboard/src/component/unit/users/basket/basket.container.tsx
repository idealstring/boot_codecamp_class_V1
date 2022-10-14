import Link from "next/link";
import * as S from "./basket.styles";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils/utils";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";

const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
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

export default function BasketContainer() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, { variables: { search: "", page: 1 } });
  console.log(data);

  return (
    <div>
      <S.PageTitle>장바구니</S.PageTitle>
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
        {data?.fetchUseditemsIPicked.map((pickItem, i) => (
          <Link href={`/market/${pickItem._id}`}>
            <a>
              <S.BoardBodyWrapper key={i}>
                <S.ContentNumber>{pickItem._id}</S.ContentNumber>
                <S.ContentTitle>{pickItem.name}</S.ContentTitle>
                <S.ContentSell>
                  {pickItem.soldAt ? "판매완료" : null}
                </S.ContentSell>
                <S.ContentPrice>
                  {PriceFormatter(pickItem.price)}
                </S.ContentPrice>
                <S.ContentDate>
                  {dateFormatter(pickItem.createdAt)}
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
