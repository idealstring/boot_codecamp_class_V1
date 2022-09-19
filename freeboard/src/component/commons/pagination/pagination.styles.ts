import styled from "@emotion/styled";
import { IActiveProps } from "./pagination.types";

export const PaginationWrapper = styled.div`
  margin: 10px 0;
  width: 100%;

  line-height: 24px;
  // text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PagePrevNextBtn = styled.button`
  margin: 0 10px;
  border: none;
  background-color: #fff;

  display: flex;
  cursor: pointer;
`;

export const PageBtn = styled.button`
  margin: 0 5px;
  padding: 0 1.5px 0 0;
  width: 24px;
  height: 24px;
  border: none;
  background-color: #fff;

  border-bottom: ${(props: IActiveProps) =>
    props.active ? "1px solid black" : "none"};

  cursor: pointer;
`;
