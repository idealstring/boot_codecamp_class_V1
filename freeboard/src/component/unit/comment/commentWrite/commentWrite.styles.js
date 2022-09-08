import styled from "@emotion/styled";

export const HrLine = styled.hr`
  margin: 40px 0;
  width: 100%;
  border: none;
  // border-bottom: 0.8px solid #dddddd;
`;

export const CommentWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentTitle = styled.div`
  margin-bottom: 35px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CommentTitleImg = styled.img`
  margin-right: 10px;
`;

export const CommentNonmemberWrapper = styled.div`
  margin-bottom: 35px;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentNameInfo = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const InputW180H52 = styled.input`
  margin-right: 24px;
  padding: 14px 24px;
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const CommentContentWrapper = styled.div`
  padding: 0;

  width: 100%;
  border: 1px solid #bdbdbd;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TextareaW1200 = styled.textarea`
  padding: 24px;
  width: 100%;
  height: 100px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  resize: none;
`;

export const CommentContentBottom = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CharactersCounter = styled.div`
  padding: 14px 24px;
  height: 52px;
  color: #bdbdbd;
`;

export const CommentCreateButton = styled.button`
  height: 52px;
  padding: 14px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
export const CommentUpdateButton = styled.button`
  height: 52px;
  padding: 14px;
  background-color: #ffd600;
  color: #000000;
  border: none;
  cursor: pointer;
`;
