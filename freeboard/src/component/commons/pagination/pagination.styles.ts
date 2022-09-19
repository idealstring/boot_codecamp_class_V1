import styled from "@emotion/styled";
import { IActiveProps } from "./pagination.types";

export const PaginationWrapper = styled.div`
  width: 100%;
  height: 44px;

  line-height: 44px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PagePrevNextBtn = styled.button`
  margin: 0 10px;
  border: none;
  background-color: #fff;

  cursor: pointer;
`;

export const PageBtn = styled.button`
  margin: 0 10px;
  border: none;
  background-color: #fff;
  color: ${(props: IActiveProps) => (props.active ? "white" : "default")};

  cursor: pointer;
`;
