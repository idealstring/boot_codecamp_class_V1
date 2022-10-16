import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { IUseditem } from "../../../../commons/types/generated/types";
import { dateFormatter, PriceFormatter } from "../../../../commons/utils/utils";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./marketList.styles";
import { IMarketListPresenterProps } from "./marketList.types";

export default function MarketListPresenter(P: IMarketListPresenterProps) {
  const { data, onLoadMore, recentItems } = P;
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <InfiniteScroll pageStart={1} loadMore={onLoadMore} hasMore={true}>
      <S.Container>
        <S.Wrapper01>
          {data?.fetchUseditems.map((el: IUseditem, i: number) => (
            <Link href={`/market/${el._id}`} key={i}>
              <a>
                <S.Item>
                  <S.ItemLeft>
                    <S.Image
                      src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    />
                    <S.ItemLeftMiddle>
                      <div>
                        <S.Name>{el.name}</S.Name>
                        <S.Price>{PriceFormatter(el.price)}</S.Price>
                        <S.Subtext>{el.tags}</S.Subtext>
                      </div>
                      <div>
                        <S.Subtext>
                          등록일 {dateFormatter(el.createdAt)}
                        </S.Subtext>
                        장바구니담은사람수
                      </div>
                    </S.ItemLeftMiddle>
                  </S.ItemLeft>
                  <S.ItemRight>
                    <span>{el.seller?.name}</span>
                  </S.ItemRight>
                </S.Item>
              </a>
            </Link>
          ))}
        </S.Wrapper01>
        <S.Wrapper02>
          <S.SideSticky>
            <S.Wrapper03>
              <S.Subtext>최근 본 상품</S.Subtext>
              {typeof window !== "undefined" &&
                recentItems?.map((el: any, i: number) => (
                  <Link href={`/market/${el.id}`} key={i}>
                    <a>
                      <S.RecentItem>
                        <img
                          width="100%"
                          height="100%"
                          src={`https://storage.googleapis.com/${el.imageUrl}`}
                        />
                      </S.RecentItem>
                    </a>
                  </Link>
                ))}
            </S.Wrapper03>
            <S.CreateBtn onClick={onClickMoveToPage("/market/new")}>
              상품등록
            </S.CreateBtn>
          </S.SideSticky>
        </S.Wrapper02>
      </S.Container>
    </InfiniteScroll>
  );
}
