import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  min-width: 500px;
`;

export const wrapper01 = styled.div`
  margin: 0 0 28px 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const wrapper02 = styled.div`
  margin: 0 0 28px 0;
  width: 100%;
`;

export const wrapper03 = styled.div`
  margin: 0 0 28px 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Item = styled.div`
  margin-bottom: 10px;
  width: 190px;

  display: flex;
  flex-direction: column;
  justift-content: flex-start;
  align-items: flex-start;
`;

export const Image = styled.img`
  margin-bottom: 10px;
  width: 100%;
  max-width: 190px;
  height: 100%;
  max-height: 190px;
`;

export const Name = styled.h1`
  margin-bottom: 5px;
`;

export const Price = styled.span`
  margin-bottom: 5px;
  font-family: ${StyleSet.fontFamily.b};
`;

export const RiviewCount = styled.span`
  margin-bottom: 5px;
  color: ${StyleSet.colors.gray};
`;

export const CreateBtn = styled.button`
  margin: 0 28px;
  width: 122px;
  height: 46px;
  border: 1px solid #999999;
  border-radius: 46px;
  background: transparent;
  cursor: pointer;

  position: absolute;
  top: 10px;
  right: 0;
`;
