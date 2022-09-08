import * as S from "./boardsList.styles";
import { dateFormatter } from "../../../../commons/utils/utils";
import { Fragment } from "react";
import Link from "next/link";

export default function BoardListPresenter(P) {
  return (
    <Fragment>
      <S.Title>리스트</S.Title>
      <S.BestListContainer>
        <S.BestListWrapper>
          {P.fetchBoardsOfTheBest?.fetchBoardsOfTheBest?.map((bestBoard) => (
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
            <S.SearchButton>
              <S.SearchIcon src="/search_icon.png" />
            </S.SearchButton>
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
            {P.fetchBoards?.fetchBoards?.map((board, i) => (
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
            <S.ContentButton onClick={P.onClickToWrite}>글쓰기</S.ContentButton>
          </S.ListFooter>
        </S.ListContainer>
      </S.BoardContainer>
    </Fragment>
  );
}
