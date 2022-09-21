import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { ICompleteColorProps, IErrorColorProps } from "./boardsWrite.types";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 60px 100px 100px 100px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: ${StyleSet.fontSize.h2};
  font-weight: 700px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
`;

export const WriterPwdWrapper = styled.div`
  width: 100%;
  margin-bottom: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;
`;

export const WriterPwd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: flex-start;
`;

export const Subtitle = styled.div`
  font-weight: 500;
`;

export const CompulsoryStar = styled.span`
  font-weight: 400;
  color: red;
`;

export const InputName = styled.input`
  margin-top: 16px;
  padding: 16px;
  width: 385px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: ${(props: IErrorColorProps) =>
    props.errorColor ? `${StyleSet.colors.point03}` : "default"};
  ::placeholder {
    color: ${(props: IErrorColorProps) =>
      props.errorColor ? "white" : "default"};
  }
`;

export const InputPwd = styled.input`
  margin-top: 16px;
  padding: 16px;
  width: 385px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: ${(props: IErrorColorProps) =>
    props.errorColor ? `${StyleSet.colors.point03}` : "default"};
  ::placeholder {
    color: ${(props: IErrorColorProps) =>
      props.errorColor ? "white" : "default"};
  }
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.input`
  margin-top: 16px;
  padding: 16px;
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: ${(props: IErrorColorProps) =>
    props.errorColor ? `${StyleSet.colors.point03}` : "default"};
  ::placeholder {
    color: ${(props: IErrorColorProps) =>
      props.errorColor ? "white" : "default"};
  }
`;

export const InputW100per = styled.input`
  margin-top: 16px;
  padding: 16px;
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const TextareaContent = styled.textarea`
  margin-top: 16px;
  padding: 16px;
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
  background-color: ${(props: IErrorColorProps) =>
    props.errorColor ? `${StyleSet.colors.point03}` : "default"};
  ::placeholder {
    color: ${(props: IErrorColorProps) =>
      props.errorColor ? "white" : "default"};
  }
`;

export const InputW85pxH52px = styled.input`
  margin-top: 16px;
  padding: 16px;
  width: 85px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const PostBtn = styled.button`
  margin-left: 16px;
  padding: 0 16px;
  width: 124px;
  height: 52px;
  border: none;
  font-weight: 500;
  color: white;
  background: black;
  cursor: pointer;
`;

export const InputRadio = styled.input`
  position: relative;
  appearance: none;
  margin: 0 8px;
  &:after {
    content: "";
    width: 14px;
    height: 14px;
    border: 1px solid #bdbdbd;
    border-radius: 15px;
    top: -13px;
    left: -7px;
    position: absolute;
    background-color: #ffffff;
    visibility: visible;
  }
  &:checked:before {
    content: "";
    width: 14px;
    height: 14px;
    border: 1px solid #ffd600;
    border-radius: 15px;
    top: -13px;
    left: -7px;
    position: absolute;
    background-color: #ffffff;
    visibility: visible;
  }
  &:checked:after {
    content: "";
    width: 8px;
    height: 8px;
    border: none;
    top: -9px;
    left: -3px;
    position: absolute;
    background-color: #ffd600;
    visibility: visible;
  }
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
`;

export const SubmitBtnWrapper = styled.div`
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitBtn = styled.button`
  padding: 0 16px;
  width: 179px;
  height: 52px;
  border-radius: 52px;
  border: none;
  font-weight: 500;
  color: #fff;
  background-color: ${(props: ICompleteColorProps) =>
    props.isCompleteColor ? `${StyleSet.colors.point01}` : "default"};
  cursor: pointer;
`;
export const CancelBtn = styled.button`
  margin-top: 16px;
  padding: 0 16px 16px 16px;
  border: none;
  font-weight: 500;
  color: #bdbdbd;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export const ImgUploadWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
`;
export const ImgUpload = styled.div`
  margin-right: 24px;
  width: 78px;
  height: 78px;
  background-color: ${StyleSet.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4f4f4f;
  font-size: 24px;
  cursor: pointer;
  span {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const InputRadioWrapper = styled.div`
  margin-top: 16px;
`;
