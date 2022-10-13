import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PriceFormatter } from "../../../../commons/utils/utils";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MarketDeleteModal from "../../../commons/modal/marketDelete";
import { WindowSizeContext } from "../../../commons/responsive";
import * as S from "./marketDetail.styles";
import { IMarketDetailPresenterProps } from "./marketDetail.types";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

export default function MarketDetailPresenter(P: IMarketDetailPresenterProps) {
  const { data, fetchUserData, onClickBasket, IPicked } = P;
  const { isMobile } = useContext(WindowSizeContext);
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  return (
    <>
      <S.Container>
        <S.TopWrapper isMobile={isMobile}>
          <S.ImageWrapper isMobile={isMobile}>
            {data?.fetchUseditem ? (
              <img
                src={`https://storage.googleapis.com/${data?.fetchUseditem?.images?.[0]}`}
              />
            ) : null}
          </S.ImageWrapper>
          <S.InfoWrapper isMobile={isMobile}>
            <div>
              <S.ProductSeller>
                {data?.fetchUseditem.seller?.name}
              </S.ProductSeller>
              <S.ProductTitle>{data?.fetchUseditem.name}</S.ProductTitle>
              <S.ProductPrice>
                {PriceFormatter(data?.fetchUseditem.price)}
              </S.ProductPrice>
              <S.DealInfoWrapper>
                <S.DealInfoTitle>방법</S.DealInfoTitle>
                <S.DealInfo>직거래</S.DealInfo>
              </S.DealInfoWrapper>
              <S.DealInfoWrapper>
                <S.DealInfoTitle>장소</S.DealInfoTitle>
                <div>
                  <S.DealInfo>
                    {data?.fetchUseditem.useditemAddress?.address}
                  </S.DealInfo>
                  <S.DealInfo>
                    {data?.fetchUseditem.useditemAddress?.addressDetail}
                  </S.DealInfo>
                </div>
              </S.DealInfoWrapper>
              {data?.fetchUseditem.tags ? (
                <S.DealInfoWrapper>
                  <S.DealInfoTitle>태그</S.DealInfoTitle>
                  <S.DealInfo>{data?.fetchUseditem.tags}</S.DealInfo>
                </S.DealInfoWrapper>
              ) : null}
            </div>
            <S.InfoBtnRrapper>
              <S.BasketBtn onClick={onClickBasket} IPicked={IPicked}>
                {IPicked?.length ? "빼기" : "담기"}{" "}
              </S.BasketBtn>
              <S.PurchaseBtn>구매</S.PurchaseBtn>
            </S.InfoBtnRrapper>
          </S.InfoWrapper>
        </S.TopWrapper>
      </S.Container>
      <S.DeailNavWrapper>
        <S.DetailNav>상세보기 댓글보기</S.DetailNav>
      </S.DeailNavWrapper>
      <S.Container>
        <S.BodyWrapper>
          <S.MiddleTitle>판매자 한마디</S.MiddleTitle>
          <div>{data?.fetchUseditem.remarks}</div>
        </S.BodyWrapper>
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
          {data?.fetchUseditem.contents ? (
            <Viewer initialValue={data?.fetchUseditem.contents} />
          ) : (
            <div>loadding</div>
          )}
          {/* <div
            dangerouslySetInnerHTML={{
              __html: String(data?.fetchUseditem.contents),
            }}
          /> */}
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
          {fetchUserData?.fetchUserLoggedIn._id ===
          data?.fetchUseditem.seller?._id ? (
            <MarketDeleteModal />
          ) : null}
          {fetchUserData?.fetchUserLoggedIn._id ===
          data?.fetchUseditem.seller?._id ? (
            <S.ToListBtn
              isMobile={isMobile}
              onClick={onClickMoveToPage(`/market/${router.query.detail}/edit`)}
            >
              수정하기
            </S.ToListBtn>
          ) : null}

          {fetchUserData?.fetchUserLoggedIn._id !==
          data?.fetchUseditem.seller?._id ? (
            <S.ToListBtn isMobile={isMobile} onClick={onClickBasket}>
              담기
            </S.ToListBtn>
          ) : null}

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
