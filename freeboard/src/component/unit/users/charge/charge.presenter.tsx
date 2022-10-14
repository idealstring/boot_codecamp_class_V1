import * as S from "./charge.styles";
import Head from "next/head";
import { IChargePresenterProps } from "./charge.types";

export default function ChargePresenter(P: IChargePresenterProps) {
  const { register, handleSubmit, onSubmitCharge } = P;
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.TitleWrapper>
        <S.Title>포인트 충전</S.Title>
      </S.TitleWrapper>
      <S.BodyWrapper>
        <span>충전 금액을 선택하세요.</span>
        <S.ChargeForm onSubmit={handleSubmit(onSubmitCharge)}>
          <S.LabelWrapper>
            <S.ChargeLabel>
              <input type="radio" value={100} {...register("chargePoint")} />{" "}
              <span>₩ 100</span>
            </S.ChargeLabel>
            <S.ChargeLabel>
              <input type="radio" value={1000} {...register("chargePoint")} />{" "}
              <span>₩ 1,000</span>
            </S.ChargeLabel>
            <S.ChargeLabel>
              <input type="radio" value={5000} {...register("chargePoint")} />{" "}
              <span>₩ 5,000</span>
            </S.ChargeLabel>
            <S.ChargeLabel>
              <input type="radio" value={10000} {...register("chargePoint")} />{" "}
              <span>₩ 10,000</span>
            </S.ChargeLabel>
            <S.ChargeLabel>
              <input type="radio" value={100000} {...register("chargePoint")} />{" "}
              <span>₩ 100,000</span>
            </S.ChargeLabel>
            <S.ChargeLabel>
              <input
                type="radio"
                value={1000000}
                {...register("chargePoint")}
              />{" "}
              <span>₩ 1,000,000</span>
            </S.ChargeLabel>
            <S.ChargeLabel>
              <input
                type="radio"
                value={5000000}
                {...register("chargePoint")}
              />{" "}
              <span>₩ 5,000,000</span>
            </S.ChargeLabel>
          </S.LabelWrapper>
          <S.ChargeButton>충전하기</S.ChargeButton>
        </S.ChargeForm>
      </S.BodyWrapper>
    </>
  );
}
