import * as S from "./boardsList.styles";
import { dateFormatter } from "../../../../commons/utils/utils";
import { Fragment } from "react";
import Link from "next/link";

export default function BoardListPresenter(P) {
  const { fetchBoardsOfTheBestDate, fetchBoardsData, onClickToWrite } = P;
  return (
    <Fragment>
      <S.Title>리스트</S.Title>
      <S.BestListContainer>
        <S.BestListWrapper>
          {fetchBoardsOfTheBestDate?.fetchBoardsOfTheBest?.map((bestBoard) => (
            <Link href={`/boards/${bestBoard._id}`} key={bestBoard._id}>
              <S.BestBoard>
                <S.BestTitle>{bestBoard.title}</S.BestTitle>
                <S.BestImg src="/temp_bg.png" />
                <S.BestDate>{dateFormatter(bestBoard.createdAt)}</S.BestDate>
              </S.BestBoard>
            </Link>
          ))}
        </S.BestListWrapper>
      </S.BestListContainer>
      <S.BoardContainer>
        <S.SearchbarWrapper>
          {/* <S.SearchData className="날짜바">YYYY-MM-DD ~ YYYY-MM-DD</S.SearchData> */}
          <S.SearchWordWrapper>
            <S.SearchWord
              className="검색바"
              placeholder="검색어를 입력하세요."
            />
            <S.SearchBtn>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                  fill="black"
                />
              </svg>
            </S.SearchBtn>
          </S.SearchWordWrapper>
        </S.SearchbarWrapper>
        <S.ListContainer>
          <S.ListWrapper>
            <S.ListTop>
              <S.ListNumber>번호</S.ListNumber>
              <S.ListTitle>제목</S.ListTitle>
              <S.ListWriter>작성자</S.ListWriter>
              <S.ListDate>날짜</S.ListDate>
            </S.ListTop>
            {fetchBoardsData?.fetchBoards?.map((board, i) => (
              <Link href={`/boards/${board._id}`} key={board._id}>
                <S.ListContent>
                  <S.ContentNumber>{i + 1}</S.ContentNumber>

                  <S.ContentTitle>{board.title}</S.ContentTitle>
                  <S.ContentWriter>{board.writer}</S.ContentWriter>
                  <S.ContentDate>
                    {dateFormatter(board.createdAt)}
                  </S.ContentDate>
                </S.ListContent>
              </Link>
            ))}
          </S.ListWrapper>

          <S.ListFooter>
            <S.ListNumbering>1 | 2 | 3 | 4 | 5</S.ListNumbering>
            <S.ContentBtn onClick={onClickToWrite}>글쓰기</S.ContentBtn>
          </S.ListFooter>
        </S.ListContainer>
      </S.BoardContainer>
    </Fragment>
  );
}
