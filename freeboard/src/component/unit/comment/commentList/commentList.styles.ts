import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentViewWrapper = styled.div`
  padding: 30px 5px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #bdbdbd;
`;
export const CommentViewInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CommentViewProfileWrapper = styled.div`
  margin-right: 20px;

  width: 40px;
  height: 40px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const CommentViewContentWrapper = styled.div`
  width: 100%;
`;

export const ViewContentTop = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentContentName = styled.span`
  margin-right: 15px;
  font-size: 16px;
  font-weight: 500;
`;

export const RateStarWrapper = styled.div`
  margin: 0;
  padding-bottom: 5px;
`;

export const CommentViewBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const CommentViewBtn = styled.button`
  margin-left: 10px;
  padding: 0 5px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CommentViewContent = styled.div`
  margin: 10px 0 15px 0;
  font-size: 18px;
  font-weight: 300;
`;
export const CommentViewContentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;

export const CommentNameInfo = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
