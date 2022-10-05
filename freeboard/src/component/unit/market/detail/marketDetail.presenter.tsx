import { useContext } from "react";
import { StyleSet } from "../../../../commons/style/styleSet";
import { WindowSizeContext } from "../../../commons/responsive";
import * as S from "./marketDetail.styles";

export default function MarketDetailPresenter() {
  const { isMobile } = useContext(WindowSizeContext);

  return (
    <>
      <S.Container>
        <S.TopWrapper>
          <S.ImageWrapper>사진</S.ImageWrapper>
          <S.InfoWrapper>
            <S.ProductSeller>베이직톤</S.ProductSeller>
            <S.ProductTitle>
              노스베어 프리미엄 10mm 극세사 차렵이불 SS/Q/K/LK
            </S.ProductTitle>
            <S.ProductPrice>59,900원</S.ProductPrice>
            <S.ProductAddressWrapper>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                width={16}
                fill={StyleSet.colors.point01}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 0C321.240382 0 167.210876 154.029505 167.210876 344.789124c0 73.460226 23.696847 142.181082 62.796645 197.868672L452.757883 959.722303l29.621058 50.948221c17.772635 17.772635 40.28464 17.772635 58.057275 0L570.057275 959.722303l222.750362-417.064507c39.099798-55.68759 62.796644-124.408447 62.796644-197.868672C856.789124 154.029505 701.574776 0 512 0z m0 526.070003c-72.275383 0-133.887185-41.469482-163.508244-101.896442-11.848423-23.696847-17.772635-50.948221-17.772635-79.384437 0-100.7116 81.754122-181.280879 181.280879-181.28088 100.7116 0 181.280879 81.754122 181.280879 181.28088 0 28.436216-7.109054 55.68759-17.772635 79.384437-29.621059 60.42696-92.417703 101.896442-163.508244 101.896442z" />
              </svg>
              <S.ProductAddress>
                인천광역시 부평구 부평동 10-528
              </S.ProductAddress>
            </S.ProductAddressWrapper>
          </S.InfoWrapper>
        </S.TopWrapper>
        <S.DetailNav>상세보기 댓글보기</S.DetailNav>
        <S.BodyWrapper>디테일페이지텍스트</S.BodyWrapper>
        <S.BodyWrapper>디테일페이지지도</S.BodyWrapper>
        <S.BottomWrapper isMobile={isMobile}>
          <S.ToListBtn isMobile={isMobile}>목록으로</S.ToListBtn>
          <S.ToListBtn isMobile={isMobile}>장바구니</S.ToListBtn>
          <S.BuyBtn isMobile={isMobile}>구매하기</S.BuyBtn>
        </S.BottomWrapper>
      </S.Container>
    </>
  );
}
