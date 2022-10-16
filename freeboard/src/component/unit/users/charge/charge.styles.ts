import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const TitleWrapper = styled.div`
  //   margin: 0 0 20px 0;
  padding: 0 0 20px 0;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: ${StyleSet.fontSize.h3};
  font-weight: 500;
`;

export const BodyWrapper = styled.div`
  margin: 20px 0;
`;

export const ChargeForm = styled.form`
  margin: 10px 0;

  display: flex;
  flex-direction: column;
`;

export const LabelWrapper = styled.div`
  margin: 20px 0;
`;

export const ChargeLabel = styled.label`
  margin: 0 20px 0 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    margin: 0 10px;
  }
`;

export const ChargeButton = styled.button`
  padding: 0 16px;
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 4px;
  font-size: ${StyleSet.fontSize.b2};
  font-weight: 500;
  color: #fff;
  background-color: ${StyleSet.colors.point01};
  cursor: pointer;
`;
