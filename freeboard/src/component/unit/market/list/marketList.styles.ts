import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";

export const Container = styled.section`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  max-width: 1060px;
  min-width: 500px;

  display: flex;

  position: relative;
`;

export const Wrapper01 = styled.div`
  margin: 0 0 28px 0;
  padding: 20px 0 0 0;
  width: 100%;

  border-top: 1px solid ${StyleSet.colors.lightGray02};
`;

export const Wrapper02 = styled.div`
  width: calc(100% - 1060px);
  height: 100%;

  display: block;

  position: absolute;
  top: 100px;
  right: 0;
`;

export const Wrapper03 = styled.div`
  margin: 0 0 28px 0;
  padding: 30px 20px;
  width: 122px;
  border: 1px solid ${StyleSet.colors.lightGray02};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SideSticky = styled.div`
  padding: 5px 20px;

  position: sticky;
  top: 150px;
  transition: top 0.1s ease 0s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RecentItem = styled.div`
  margin: 30px 0 0 0;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #000;

  overflow: hidden;
`;

export const Item = styled.div`
  margin: 0 0 20px 0;
  padding: 0 0 10px 0;
  width: 100%;
  max-width: 1000px;
  min-width: 500px;
  height: 200px;

  border-bottom: 1px solid ${StyleSet.colors.lightGray02};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-between;
`;

export const ItemRight = styled.div`
  padding: 0 0 0 20px;
  width: 20%;
  max-width: 200px;
  height: 80%;

  border-left: 1px solid ${StyleSet.colors.lightGray02};
`;

export const Image = styled.img`
  margin-bottom: 10px;
  width: 180px;
  height: 180px;
`;

export const ItemLeftMiddle = styled.div`
  margin: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Name = styled.h1`
  margin-bottom: 5px;
  font-size: ${StyleSet.fontSize.h3};
`;

export const Price = styled.span`
  margin-bottom: 5px;
  font-family: ${StyleSet.fontFamily.eb};
  font-size: ${StyleSet.fontSize.h2};
`;

export const Subtext = styled.span`
  margin-bottom: 5px;
  color: ${StyleSet.colors.gray};

  display: block;
`;

export const CreateBtn = styled.button`
  width: 122px;
  height: 46px;
  border: 1px solid #999999;
  border-radius: 46px;
  background: transparent;
  cursor: pointer;
`;
