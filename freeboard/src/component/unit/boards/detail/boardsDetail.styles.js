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
  font-weight: 300;

  width: 100%;
  color: #666666;

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

export const LikeWrapper = styled.div`
  margin: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
  text-align: center;
  color: #ffd600;
  cursor: pointer;
`;
export const DislikeWrapper = styled.div`
  margin: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
  text-align: center;
  color: #828282;
  cursor: pointer;
`;

export const ContentBtnWrapper = styled.div`
  margin: 0 270px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContentBtn = styled.button`
  width: 122px;
  height: 46px;
  border: 1px solid #999999;
  border-radius: 46px;
  background: none;
  cursor: pointer;
`;
