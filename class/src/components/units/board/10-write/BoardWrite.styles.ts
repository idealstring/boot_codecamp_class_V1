import styled from "@emotion/styled";
import { IBlueButtonProps } from "./BoardWrite.types";

// export const BlueButton = styled.button`
//   padding: 20px;
//   background-color: ${(props: IProps) =>
//     props.btnColor ? "yellow" : "default"};
//   font-size: ${(props: IProps) => props.fz};
//   margin: ${(props: IProps) => {
//     return props.fz;
//   }};
// `;

export const BlueButton = styled.button`
  padding: 20px;
  background-color: ${(props: IBlueButtonProps) =>
    props.mycolor ? "yellow" : "default"};
  font-size: ${(props: IBlueButtonProps) => props.fz};
  margin: ${(props: IBlueButtonProps) => {
    return props.fz;
  }};
`;
