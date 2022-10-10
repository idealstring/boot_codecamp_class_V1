import Link from "next/link";
import { IUseditem } from "../../../../commons/types/generated/types";
import { dateFormatter } from "../../../../commons/utils/utils";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./marketList.styles";
import { IMarketListPresenterProps } from "./marketList.types";

export default function MarketListPresenter(P: IMarketListPresenterProps) {
  const { data } = P;
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.wrapper01>
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
                      <S.Price>{el.price}</S.Price>
                      <S.Subtext>{el.tags}</S.Subtext>
                    </div>
                    <div>
                      <S.Subtext>
                        등록일 {dateFormatter(el.createdAt)}
                      </S.Subtext>
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
      </S.wrapper01>
      <S.wrapper02>
        <S.CreateBtn onClick={onClickMoveToPage("/market/new")}>
          상품등록
        </S.CreateBtn>
      </S.wrapper02>
    </S.Container>
  );
}
