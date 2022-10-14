import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export type IBasketStylesProps = {
  isNormalScreen?: boolean;
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1060px;
  min-width: 500px;

  display: flex;
  flex-direction: ${(props: IBasketStylesProps) =>
    props.isNormalScreen ? "row" : "column"};
  justify-content: space-between;
  align-items: flex-start;
`;

export const contentsWrapper = styled.section`
  padding: ${(props: IBasketStylesProps) =>
    props.isNormalScreen ? "30px" : "30px 0"};
  width: ${(props: IBasketStylesProps) =>
    props.isNormalScreen ? "80%" : "100%"};
  max-width: 1000px;
  min-width: 200px;
`;

export const PageTitle = styled.h1`
  font-size: ${StyleSet.fontSize.h3};
  font-family: ${StyleSet.fontFamily.b};
`;

export const contentsButton = styled.button`
  margin: 0 10px 0 0;
  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const BoardWrapper = styled.div`
  min-width: 500px;
  margin: 16px 0;
  text-align: center;
`;

export const BoardTopWrapper = styled.div`
  width: 100%;
  height: 40px;
  font-weight: 900;

  border-top: 1px solid ${StyleSet.colors.lightGray02};
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;
`;

export const BoardThNumber = styled.span`
  width: 50px;
  line-height: 40px;
  text-align: center;
`;
export const BoardThTitle = styled.span`
  width: 60%;
  line-height: 40px;
  text-align: center;
`;
export const BoardThSell = styled.span`
  width: 110px;
  line-height: 40px;
  text-align: center;
`;
export const BoardThPrice = styled.span`
  width: 100px;
  line-height: 40px;
  text-align: center;
`;

export const BoardThDate = styled.span`
  width: 110px;
  min-width: 90px;
  line-height: 40px;
  text-align: center;
`;

export const BoardBodyWrapper = styled.div`
  width: 100%;
  height: 50px;

  border-bottom: 1px solid ${StyleSet.colors.lightGray01};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;
`;

export const ContentNumber = styled.span`
  width: 50px;
  line-height: 50px;
  text-align: center;
`;
export const ContentTitle = styled.span`
  width: 60%;
  line-height: 50px;
  text-align: center;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ContentSell = styled.span`
  width: 110px;
  line-height: 50px;
  text-align: center;
`;

export const ContentPrice = styled.span`
  width: 100px;
  line-height: 50px;
  text-align: center;
`;
export const ContentDate = styled.span`
  width: 110px;
  min-width: 90px;
  line-height: 50px;
  text-align: center;
`;
