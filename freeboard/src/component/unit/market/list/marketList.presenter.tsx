import Link from "next/link";
import { ReactChild, ReactFragment, ReactPortal, Key } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import PageNation02 from "../../../commons/pagination/02/pagination02.container";
import * as S from "./marketList.styles";
import { IMarketListPresenterProps } from "./marketList.types";

export default function MarketListPresenter(P: IMarketListPresenterProps) {
  const { data } = P;
  const { onClickMoveToPage } = useMoveToPage();
  console.log(data?.fetchUseditems);

  return (
    <S.Container>
      <S.wrapper01>
        {data?.fetchUseditems.map(
          (
            el: {
              images: any[];
              name:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              price:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
              _id:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            },
            i: Key | null | undefined
          ) => (
            <S.Item key={i}>
              <Link href={`/market/${el._id}`}>
                <a>
                  <S.Image
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  />
                  <S.Name>{el.name}</S.Name>
                  <S.Price>{el.price}</S.Price>
                  <S.RiviewCount>리뷰 1,264</S.RiviewCount>
                </a>
              </Link>
            </S.Item>
          )
        )}
      </S.wrapper01>
      <S.wrapper02>
        <S.wrapper03>
          <PageNation02 />
          <S.CreateBtn onClick={onClickMoveToPage("/market/new")}>
            상품등록
          </S.CreateBtn>
        </S.wrapper03>
      </S.wrapper02>
    </S.Container>
  );
}
