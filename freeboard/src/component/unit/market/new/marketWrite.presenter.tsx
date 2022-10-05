import { useContext } from "react";
import { WindowSizeContext } from "../../../commons/responsive";
import Uploads02 from "../../../commons/uploads/02/uploads02.container";
import * as S from "./marketWrite.styles";

export default function MarketPresenter() {
  const { isNormalScreen } = useContext(WindowSizeContext);

  return (
    <>
      <S.Container>
        <S.Wrapper01>
          <S.SectionTitle>상품 등록</S.SectionTitle>
        </S.Wrapper01>
        <S.Wrapper01>
          <S.InputText01 type="text" placeholder="상품명" />
        </S.Wrapper01>
        <S.Wrapper01>
          <S.InputText02 type="text" placeholder="한 줄 요약" />
        </S.Wrapper01>
        <S.Wrapper01>
          <S.Textarea placeholder="내용을 입력해주세요." />
        </S.Wrapper01>
        <S.Wrapper02>
          <S.Label01>판매가격(원)</S.Label01>
          <S.InputText02 type="text" placeholder="100,000" />
        </S.Wrapper02>
        <S.Wrapper02>
          <S.Label01>태그입력</S.Label01>
          <S.InputText02 type="text" placeholder="#태그 #태그 #태그" />
        </S.Wrapper02>
        <S.Wrapper06 isNormalScreen={isNormalScreen}>
          <S.Wrapper01>
            <S.Label02>거래위치</S.Label02>
            <div
              style={{
                width: "384px",
                height: "252px",
                border: "1px solid lightgray",
              }}
            ></div>
          </S.Wrapper01>
          <S.Wrapper01>
            <S.Label02>GPS</S.Label02>
            <S.Wrapper03>
              <S.InputText03 type="text" placeholder="위도" />
              <S.InputText03 type="text" placeholder="경도" />
            </S.Wrapper03>
            <div>
              <S.Label02>주소</S.Label02>
              <S.Wrapper04>
                <S.InputText04 type="text" placeholder="주소 입력" />
                <S.InputText04 type="text" placeholder="상세주소 입력" />
              </S.Wrapper04>
            </div>
          </S.Wrapper01>
        </S.Wrapper06>
        <S.Wrapper01>
          <S.Label02>사진</S.Label02>
          <Uploads02 />
        </S.Wrapper01>
        <S.Wrapper01>
          <S.Label02>메인사진 설정</S.Label02>
          <div>
            <input type="radio" name="mainImg" id="img1" />
            <S.Label03 htmlFor="img1">사진1</S.Label03>
            <input type="radio" name="mainImg" id="img2" />
            <S.Label03 htmlFor="img2">사진2</S.Label03>
          </div>
        </S.Wrapper01>
        <S.Wrapper05>
          <S.CreateBtn>등록하기</S.CreateBtn>
          <S.CancelBtn>취소</S.CancelBtn>
        </S.Wrapper05>
      </S.Container>
    </>
  );
}
