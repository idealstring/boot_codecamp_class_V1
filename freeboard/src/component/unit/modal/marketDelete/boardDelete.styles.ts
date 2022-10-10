import styled from "@emotion/styled";

type IScreenProps = {
  isMobile?: Boolean;
};

export const ContentBtn = styled.button`
  margin-bottom: ${(props: IScreenProps) => (props.isMobile ? "16px" : "0")};
  padding: 0 16px;
  width: ${(props: IScreenProps) => (props.isMobile ? "100%" : "179px")};
  height: 52px;
  border-radius: 52px;
  border: none;
  font-weight: 500;
  background-color: default;
  cursor: pointer;
`;
