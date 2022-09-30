import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 400px;
`;

export const Hgroup = styled.hgroup`
  margin: 30px 0 0 0;
  h1 {
    margin: 0;
    font-size: ${StyleSet.fontSize.h3};
    font-family: ${StyleSet.fontFamily.eb};
  }
`;

export const BGroup = styled.section`
  padding: 20px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: flex-start;
`;

export const Inner = styled.label`
  margin: 3px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  algin-items: flex-start;
`;

export const Input = styled.input`
  padding: 9px 15px 9px 15px;
  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 5px;
  ::placeholder {
    color: ${StyleSet.colors.lightGray02};
  }
`;

export const Label = styled.label`
  margin: 25px 0 10px 0;
  font-size: ${StyleSet.fontSize.b2};
  font-family: ${StyleSet.fontFamily.b};
`;

export const ConditionsWrapper = styled.div`
  padding: 15px 15px 15px 15px;
  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 5px;
  //   background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: flex-start;
`;

export const AllCheck = styled.span`
  margin: 0 0 0 10px;
  font-family: ${StyleSet.fontFamily.b};
  font-size: ${StyleSet.fontSize.b3};
`;

export const EssentialCheck = styled.span`
  margin: 0 0 0 10px;
  font-size: ${StyleSet.fontSize.b3};
  :after {
    content: " (필수)";
    color: ${StyleSet.colors.point01};
    font-size: ${StyleSet.fontSize.b5};
    font-weight: 300;
  }
`;

export const SelectedCheck = styled.span`
  margin: 0 0 0 10px;
  font-size: ${StyleSet.fontSize.b3};
  :after {
    content: " (선택)";
    color: ${StyleSet.colors.lightGray02};
    font-size: ${StyleSet.fontSize.b5};
    font-weight: 300;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${StyleSet.colors.lightGray01};
`;

export const UserRegisterBtn = styled.button`
  margin: 10px 0 0 0;
  width: 100%;
  padding: 11px 10px;
  font-size: ${StyleSet.fontSize.b2};
  font-family: ${StyleSet.fontFamily.b};
  color: ${StyleSet.colors.white};
  background-color: ${StyleSet.colors.point01};
  border: none;
  border-radius: 5px;
`;

export const LoginWrapper = styled.div`
  margin: 25px 0;
  width: 100%;
  text-align: center;
`;

export const LoginBtn = styled.button`
  margin: 25px 8px;
  text-align: center;
  font-family: ${StyleSet.fontFamily.b};
  text-decoration: underline;

  border: none;
  background-color: #fff;
`;
