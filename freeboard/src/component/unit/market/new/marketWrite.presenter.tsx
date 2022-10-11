import { useContext, useEffect } from "react";
import Input02 from "../../../commons/inputs/02/input02";
import Input03 from "../../../commons/inputs/03/input03";
import Input04 from "../../../commons/inputs/04/input04";
import Input05 from "../../../commons/inputs/05/input05";
import { WindowSizeContext } from "../../../commons/responsive";
import Uploads02 from "../../../commons/uploads/02/uploads02.container";
import * as S from "./marketWrite.styles";
import Textarea01 from "../../../commons/textarea/01/textarea01";
import { IMarketPresenterProps } from "./marketWrite.types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ZipcodeModalMarket from "../../../commons/modal/zipcodeModal_market";

export default function MarketPresenter(P: IMarketPresenterProps) {
  const {
    onClickSubmit,
    onClickUpdate,
    setValue,
    register,
    handleSubmit,
    formState,
    fileUrls,
    onChangeFileUrls,
    isEdit,
    existingData,
  } = P;
  const { isNormalScreen } = useContext(WindowSizeContext);
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.Container>
        <form
          onSubmit={
            isEdit ? handleSubmit(onClickUpdate) : handleSubmit(onClickSubmit)
          }
        >
          <S.Wrapper01>
            <S.SectionTitle>
              {isEdit ? "상품 수정" : "상품 등록"}
            </S.SectionTitle>
          </S.Wrapper01>
          <S.Wrapper01>
            <Input02
              type="text"
              id="name"
              placeholder="상품명"
              register={register("name")}
              error={formState.errors.name?.message}
            />
          </S.Wrapper01>
          <S.Wrapper01>
            <Input03
              type="text"
              placeholder="한 줄 요약"
              register={register("remarks")}
              error={formState.errors.remarks?.message}
            />
          </S.Wrapper01>
          <S.Wrapper01>
            <Textarea01
              placeholder="내용을 입력해주세요."
              register={register("contents")}
              error={formState.errors.remarks?.message}
            />
          </S.Wrapper01>
          <S.Wrapper02>
            <S.Label01>판매가격(원)</S.Label01>
            <Input03
              type="text"
              placeholder="100,000"
              register={register("price")}
              error={formState.errors.price?.message}
              existingData={existingData}
            />
          </S.Wrapper02>
          <S.Wrapper02>
            <S.Label01>태그입력</S.Label01>
            <Input03
              type="text"
              placeholder="#태그 #태그 #태그"
              register={register("tags")}
              existingData={existingData}
            />
          </S.Wrapper02>
          <S.Wrapper06 isNormalScreen={isNormalScreen}>
            <S.Wrapper01>
              <S.Label02>거래위치</S.Label02>
              <S.KakaoMap id="map"></S.KakaoMap>
            </S.Wrapper01>
            <S.Wrapper01>
              <div>
                <S.Label02>주소</S.Label02>
                <S.Wrapper04>
                  <S.Wrapper08>
                    <Input05
                      type="text"
                      placeholder="우편번호"
                      register={register("useditemAddress.zipcode")}
                      error={formState.errors.address?.message}
                    />
                    <ZipcodeModalMarket setValue={setValue} />
                  </S.Wrapper08>
                  <Input05
                    type="text"
                    placeholder="주소 입력"
                    register={register("useditemAddress.address")}
                    error={formState.errors.address?.message}
                  />
                  <Input05
                    type="text"
                    placeholder="상세주소 입력"
                    register={register("useditemAddress.addressDetail")}
                    error={formState.errors.addressDetail?.message}
                  />
                </S.Wrapper04>
              </div>
              <S.Label02>GPS</S.Label02>
              <S.Wrapper03>
                <Input04
                  type="text"
                  placeholder="위도"
                  register={register("useditemAddress.lat")}
                />
                <Input04
                  type="text"
                  placeholder="경도"
                  register={register("useditemAddress.lng")}
                />
              </S.Wrapper03>
            </S.Wrapper01>
          </S.Wrapper06>
          <S.Wrapper01>
            <S.Label02>사진</S.Label02>
            <S.Wrapper07>
              {fileUrls.map((el, index) => (
                <Uploads02
                  key={index}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={onChangeFileUrls}
                />
              ))}
            </S.Wrapper07>
          </S.Wrapper01>
          <S.Wrapper01>
            <S.Label02>메인사진 설정</S.Label02>
            <div>
              <input
                type="radio"
                id="img1"
                value="0"
                // {...register("pickedCount")}
              />
              <S.Label03 htmlFor="img1">사진1</S.Label03>
              <input
                type="radio"
                id="img2"
                value="1"
                // {...register("pickedCount")}
              />
              <S.Label03 htmlFor="img2">사진2</S.Label03>
            </div>
          </S.Wrapper01>
          <S.Wrapper05>
            {isEdit ? (
              <S.CreateBtn>수정하기</S.CreateBtn>
            ) : (
              <S.CreateBtn>등록하기</S.CreateBtn>
            )}
            <S.CancelBtn type="button" onClick={onClickMoveToPage("/market")}>
              취소
            </S.CancelBtn>
          </S.Wrapper05>
        </form>
      </S.Container>
    </>
  );
}
