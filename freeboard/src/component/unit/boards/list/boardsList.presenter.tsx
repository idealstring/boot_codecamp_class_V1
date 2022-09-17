import * as S from "./boardsList.styles";
import { dateFormatter } from "../../../../commons/utils/utils";
import { Fragment } from "react";
import Link from "next/link";
import { IBoardListPresenterProps } from "./boardList.types";

export default function BoardListPresenter(P: IBoardListPresenterProps) {
  const {
    fetchBoardsOfTheBestDate,
    fetchBoardsData,
    onClickToWrite,
    onClickDateOpen,
    isDateOpen,
  } = P;
  return (
    <Fragment>
      {/* <S.Title>리스트</S.Title> */}
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
          <S.SearchWordWrapper>
            <S.SearchWord
              className="검색바"
              placeholder="검색어를 입력하세요."
            />
            <S.SearchBtn>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                version="1.1"
                width="30px"
                height="30px"
              >
                <path
                  d="M680 444.8c0-129.6-105.6-236.8-236.8-236.8S208 315.2 208 444.8s105.6 236.8 236.8 236.8c59.2 0 113.6-22.4 155.2-59.2l211.2 211.2 22.4-22.4-211.2-211.2c35.2-41.6 57.6-96 57.6-155.2zM444.8 240c112 0 204.8 91.2 204.8 204.8s-91.2 204.8-204.8 204.8S240 556.8 240 444.8 331.2 240 444.8 240z"
                  fill="#8d8d8d"
                />
              </svg>
            </S.SearchBtn>
          </S.SearchWordWrapper>
          <S.DateOpenBtn onClick={onClickDateOpen}>
            {!isDateOpen ? (
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 1024 1024"
                version="1.1"
                fill="#8d8d8d"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M894.973949 322.308432a24.8 24.8 0 1 0 35.071884-35.073108 24.8 24.8 0 1 0-35.071884 35.073108Z" />
                <path d="M114.9 291.4l-35.3 35.3 422.5 422.5 427.6-427.7-30.6-30.6h-7.8L502.9 679.4z" />
                <path d="M79.547924 326.565605a24.8 24.8 0 1 0 35.071885-35.073108 24.8 24.8 0 1 0-35.071885 35.073108Z" />
              </svg>
            ) : (
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 1024 1024"
                version="1.1"
                fill="#8d8d8d"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(180)"
              >
                <path d="M894.973949 322.308432a24.8 24.8 0 1 0 35.071884-35.073108 24.8 24.8 0 1 0-35.071884 35.073108Z" />
                <path d="M114.9 291.4l-35.3 35.3 422.5 422.5 427.6-427.7-30.6-30.6h-7.8L502.9 679.4z" />
                <path d="M79.547924 326.565605a24.8 24.8 0 1 0 35.071885-35.073108 24.8 24.8 0 1 0-35.071885 35.073108Z" />
              </svg>
            )}
          </S.DateOpenBtn>
          {isDateOpen ? (
            <S.SearchDate>YYYY-MM-DD ~ YYYY-MM-DD</S.SearchDate>
          ) : null}
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
