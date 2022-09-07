import styled from "@emotion/styled";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 60px 100px 100px 100px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const TitleWrapper = styled.div`
  margin: 0 0 30px 0;
  padding: 50px 0;
  border-top: 0.5px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;

  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
`;
export const TitleInfoTop = styled.div`
  margin: 5px 0;
  font-size: 0.9rem;
  font-weight: 400;

  width: 100%;
  color: #666666;
  font-weight: 400;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: relative;
`;
export const TitleInfoBottom = styled.div`
  margin: 5px 0;
  font-size: 0.9rem;
  font-weight: 400;

  width: 300px;
  color: #666666;
  font-weight: 400;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  position: absolute;
  left: 680px;
  top: 110px;
`;

export const IconWrapper = styled.div`
  margin: 0 5px;
  width: 26px;
  height: 26px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkIcon = styled.img`
  width: 26px;
  height: 13px;
`;

export const LinkModal = styled.div`
  top: 35px;
  right: 30px;
  padding: 10px 20px;
  background-color: #999999;
  color: #ffffff;

  // display: none;

  position: absolute;
  &:after {
    position: absolute;
    content: "";
    top: -5px;
    right: 20px;
    width: 10px;
    height: 10px;
    background-color: #999999;
    transform: rotate(45deg);
  }
`;

export const MapIcon = styled.img`
  width: 18px;
  height: 26px;
`;

export const MapModal = styled.div`
  top: 35px;
  right: -8px;
  padding: 10px 20px;
  background-color: #999999;
  color: #ffffff;

  // display: none;

  position: absolute;
  &:after {
    position: absolute;
    content: "";
    top: -5px;
    right: 20px;
    width: 10px;
    height: 10px;
    background-color: #999999;
    transform: rotate(45deg);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
`;

export const ContentInner = styled.div`
  margin-bottom: 10px;
  line-height: 30px;
`;

export const LikeDislikeWrapper = styled.div`
  margin: 50px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LikeDislikeInner = styled.div`
  margin: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
  text-align: center;
  color: gray;
  cursor: pointer;
`;

export const ContentButtonWrapper = styled.div`
  margin: 0 270px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContentButton = styled.button`
  width: 122px;
  height: 46px;
  border: 1px solid #999999;
  border-radius: 46px;
  background: none;
  cursor: pointer;
`;

export const HrLine = styled.hr`
  margin: 40px 0;
  width: 100%;
  border: none;
  border-bottom: 0.8px solid #dddddd;
`;

export const CommentWrapper = styled.div`
  width: 100%;

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

export const InputW1200 = styled.input`
  padding: 24px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #f2f2f2;
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
  font-weight: 500;
`;

export const CommentViewButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  button {
    margin-left: 10px;
    padding: 0 5px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const CommentViewContent = styled.div`
  font-weight: 300;
  margin-bottom: 15px;
`;
export const CommentViewContentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
