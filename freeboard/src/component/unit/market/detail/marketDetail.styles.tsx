import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { IMarketDetailStylesProps } from "./marketDetail.types";

export const Container = styled.section`
  margin: 0 auto;
  padding: 60px 100px 60px;

  width: 100%;
  max-width: 1000px;
  min-width: 500px;
`;

export const TopWrapper = styled.div`
  // margin: 0 0 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
`;

export const DetailNav = styled.div`
  margin: 0 0 20px 0;
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  position: sticky;
  top: 0;
  background-color: #fff;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
`;

export const ImageWrapper = styled.div`
  // width: 100%;
  // max-width: 380px;
  // max-height: 380px;
  // aspect-ratio: 1/1;
  img {
    width: 100%;
    max-width: 380px;
    max-height: 380px;
    aspect-ratio: 1/1;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  max-width: 380px;
`;

export const ProductSeller = styled.span`
  margin: 0 0 10px 0;

  display: block;
`;

export const ProductTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: ${StyleSet.fontSize.b2};
`;

export const ProductPrice = styled.span`
  margin: 0 0 10px 0;
  font-size: ${StyleSet.fontSize.h3};
  font-family: ${StyleSet.fontFamily.b};

  display: block;
`;

export const ProductAddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ProductAddress = styled.span`
  margin: 0 0 0 10px;

  display: block;
`;

export const MiddleTitle = styled.span`
  margin: 0 0 20px 0;
  font-family: ${StyleSet.fontFamily.b};

  display: block;
`;

export const BodyWrapper = styled.div`
  margin: 0 0 20px 0;
  padding: 0 0 20px 0;
  width: 100%;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
`;

export const KakaoMap = styled.div`
  width: 100%;
  height: 300px;
`;

export const BottomWrapper = styled.div`
  padding-top: 20px;
  text-align: center;

  display: flex;
  flex-direction: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
`;

export const BuyBtn = styled.button`
  padding: 0 16px;
  width: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "100%" : "179px"};
  height: 52px;
  border-radius: 52px;
  border: none;
  font-weight: 500;
  color: #fff;
  background-color: ${StyleSet.colors.point01};
  cursor: pointer;
`;

export const ToListBtn = styled.button`
  margin-bottom: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "16px" : "0"};
  padding: 0 16px;
  width: ${(props: IMarketDetailStylesProps) =>
    props.isMobile ? "100%" : "179px"};
  height: 52px;
  border-radius: 52px;
  border: none;
  font-weight: 500;
  // color: #fff;
  background-color: default;
  cursor: pointer;
`;
