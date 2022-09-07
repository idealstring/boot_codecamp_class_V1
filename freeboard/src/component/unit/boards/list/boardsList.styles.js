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

export const Title = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: 700px;
`;

export const BestListWrapper = styled.div`
  padding: 80px 0;
  width: 100%;
  height: 400px;

  background-color: #eee;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BestBoard = styled.div`
  padding: 32px;
  width: 260px;
  height: 240px;

  background-color: #eee;

  margin-bottom: 16px;
  text-align: center;
  font-weight: 700px;
`;

export const SearchbarWrapper = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  algin-items: center;
`;

export const SearchWordWrapper = styled.div`
  position: relative;
`;

export const SearchWord = styled.input`
  padding: 9px 62px 9px 16px;
  width: 360px;
  height: 48px;
  border: 1px solid #d8d8d8;
`;

export const SearchButton = styled.button`
  appearance: none;
  border: none;
  background: none;

  cursor: pointer;

  position: absolute;
  right: 15px;
  top: 14px;
`;

export const SearchIcon = styled.img``;

export const SearchData = styled.div`
  width: 360px;
  height: 48px;
  background-color: #f2f2f2;
  text-align: center;
  line-height: 48px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
`;

export const ListWrapper = styled.ul`
  padding: 0;
  border-top: 1px solid black;
  border-bottom: 1px solid #eee;

  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  algin-items: center;
`;

export const ListTop = styled.li`
  padding: 0 20px;
  height: 44px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;
`;

export const ListNumber = styled.div`
  width: 50px;
  line-height: 44px;
  text-align: center;
`;
export const ListTitle = styled.div`
  width: 65%;
  line-height: 44px;
  text-align: center;
`;
export const ListWriter = styled.div`
  width: 110px;
  line-height: 44px;
  text-align: center;
`;
export const ListDate = styled.div`
  width: 110px;
  line-height: 44px;
  text-align: center;
`;

export const ListContent = styled.li`
  padding: 0 20px;
  height: 88px;

  border-top: 1px solid #eee;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;
`;

export const ContentNumber = styled.div`
  width: 50px;
  line-height: 88px;
  text-align: center;
`;
export const ContentTitle = styled.div`
  width: 65%;
  line-height: 88px;
  text-align: center;
`;
export const ContentWriter = styled.div`
  width: 110px;
  line-height: 88px;
  text-align: center;
`;
export const ContentDate = styled.div`
  width: 110px;
  line-height: 88px;
  text-align: center;
`;

export const ListFooter = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const ListNumbering = styled.div`
  width: 100%;
  height: 44px;

  line-height: 44px;

  text-align: center; ;
`;

export const ContentButton = styled.button`
  width: 122px;
  height: 46px;
  border: 1px solid #999999;
  border-radius: 46px;
  background: none;
  cursor: pointer;

  position: absolute;
  top: 10px;
  right: 0;
`;
