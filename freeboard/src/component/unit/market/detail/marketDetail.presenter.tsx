import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { StyleSet } from "../../../../commons/style/styleSet";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MarketDeleteModal from "../../../commons/modal/marketDelete";
import { WindowSizeContext } from "../../../commons/responsive";
import * as S from "./marketDetail.styles";
import { IMarketDetailPresenterProps } from "./marketDetail.types";

export default function MarketDetailPresenter(P: IMarketDetailPresenterProps) {
  const { data, onClickDeleteProduct } = P;
  const { isMobile } = useContext(WindowSizeContext);
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  return (
    <>
      <S.Container>
        <S.TopWrapper>
          <S.ImageWrapper>
            {data?.fetchUseditem ? (
              <img
                src={`https://storage.googleapis.com/${data?.fetchUseditem?.images?.[0]}`}
              />
            ) : null}
          </S.ImageWrapper>
          <S.InfoWrapper>
            <S.ProductSeller>
              {data?.fetchUseditem.seller?.name}
            </S.ProductSeller>
            <S.ProductTitle>{data?.fetchUseditem.name}</S.ProductTitle>
            <S.ProductPrice>{data?.fetchUseditem.price}</S.ProductPrice>
            <S.DealInfoWrapper>
              <S.DealInfoTitle>거래방법</S.DealInfoTitle>
              <S.DealInfo>직거래</S.DealInfo>
            </S.DealInfoWrapper>
            <S.DealInfoWrapper>
              {/* <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                width={16}
                fill={StyleSet.colors.point01}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 0C321.240382 0 167.210876 154.029505 167.210876 344.789124c0 73.460226 23.696847 142.181082 62.796645 197.868672L452.757883 959.722303l29.621058 50.948221c17.772635 17.772635 40.28464 17.772635 58.057275 0L570.057275 959.722303l222.750362-417.064507c39.099798-55.68759 62.796644-124.408447 62.796644-197.868672C856.789124 154.029505 701.574776 0 512 0z m0 526.070003c-72.275383 0-133.887185-41.469482-163.508244-101.896442-11.848423-23.696847-17.772635-50.948221-17.772635-79.384437 0-100.7116 81.754122-181.280879 181.280879-181.28088 100.7116 0 181.280879 81.754122 181.280879 181.28088 0 28.436216-7.109054 55.68759-17.772635 79.384437-29.621059 60.42696-92.417703 101.896442-163.508244 101.896442z" />
              </svg> */}
              <S.DealInfoTitle>거래장소</S.DealInfoTitle>
              <div>
                <S.DealInfo>
                  {data?.fetchUseditem.useditemAddress?.address}{" "}
                </S.DealInfo>
                <S.DealInfo>
                  {data?.fetchUseditem.useditemAddress?.addressDetail}
                </S.DealInfo>
              </div>
            </S.DealInfoWrapper>
          </S.InfoWrapper>
        </S.TopWrapper>
        <S.DetailNav>상세보기 댓글보기</S.DetailNav>
        <S.BodyWrapper>
          <S.MiddleTitle>상품정보</S.MiddleTitle>
          {/* <div>
            {data?.fetchUseditem?.images?.map((el: string, i: number) => (
              <div key={i}>
                <div>
                  <img src={`https://storage.googleapis.com/${el}`} />
                </div>
              </div>
            ))}
          </div> */}
          <div>{data?.fetchUseditem.contents}</div>
        </S.BodyWrapper>
        <S.BodyWrapper>
          <S.MiddleTitle>거래위치</S.MiddleTitle>
          <S.KakaoMap id="map" />
        </S.BodyWrapper>
        <S.BottomWrapper isMobile={isMobile}>
          <S.ToListBtn
            isMobile={isMobile}
            onClick={onClickMoveToPage("/market")}
          >
            목록으로
          </S.ToListBtn>
          <MarketDeleteModal />
          <S.ToListBtn
            isMobile={isMobile}
            onClick={() => {
              Modal.error({ content: "미완성기능" });
            }}
          >
            담기
          </S.ToListBtn>
          <S.BuyBtn
            isMobile={isMobile}
            onClick={() => {
              Modal.error({ content: "미완성기능" });
            }}
          >
            구매하기
          </S.BuyBtn>
        </S.BottomWrapper>
      </S.Container>
    </>
  );
}
