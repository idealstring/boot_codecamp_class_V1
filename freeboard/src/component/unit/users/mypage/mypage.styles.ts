import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { IMyPageStylesProps } from "./myPage.types";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1060px;
  min-width: 500px;

  display: flex;
  flex-direction: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "row" : "column"};
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProfileWrapper = styled.section`
  padding: 30px 25px 16px;
  width: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "20%" : "100%"};
  max-width: 1000px;
  min-width: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "210px" : "500px"};
  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileTop = styled.section`
  padding-bottom: 16px;
  width: 100%;
  min-height: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "220px" : "160px"};

  display: flex;
  flex-direction: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "column" : "row"};
  justify-content: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "space-between" : "center"};
  align-items: center;
`;

export const NicknameWrapper = styled.div`
  margin: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "0" : "0 0 0 24px"};
  min-height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: ${StyleSet.fontSize.h5};
    font-family: ${StyleSet.fontFamily.eb};
  }
`;

export const EditButton = styled.button`
  padding: 3px 14px;
  font-size: ${StyleSet.fontSize.b5};
  background-color: transparent;
  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 5px;

  cursor: pointer;
`;

export const ProfileBottom = styled.section`
  width: 100%;
  padding: 24px 0 6px;

  border-top: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "space-between" : "center"};
  align-items: center;
`;

export const BottomButton = styled.button`
  margin: 0 5px;
  padding: 3px 14px;
  width: 65px;
  height: 65px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
  text-align: center;

  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  svg {
    margin: 0 auto;
  }
  span {
    margin: 0 auto;
    font-size: ${StyleSet.fontSize.b5};
  }
`;

export const contentsWrapper = styled.section`
  padding: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "30px" : "30px 0"};
  width: ${(props: IMyPageStylesProps) =>
    props.isNormalScreen ? "80%" : "100%"};
  max-width: 1000px;
  min-width: 200px;
`;

export const PageTitle = styled.h1`
  font-size: ${StyleSet.fontSize.h3};
  font-family: ${StyleSet.fontFamily.b};
`;

export const contentsButton = styled.button`
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