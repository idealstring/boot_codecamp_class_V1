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
  margin: 20px 0;
  width: 100%;

  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 5px;

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
  border: none;
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

export const Line = styled.hr`
  margin: 0;
  width: 100%;
  border: none;
  border-top: 1px solid ${StyleSet.colors.lightGray02};
`;

export const SignInBtn = styled.button`
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

export const LoginBtn = styled.a`
  margin: 25px 10px;
  width: 100%;
  text-align: center;
  font-size: ${StyleSet.fontSize.b4};
`;

export const LoginWrapper = styled.div`
  margin: 25px 0;
  width: 100%;
  text-align: center;
`;
