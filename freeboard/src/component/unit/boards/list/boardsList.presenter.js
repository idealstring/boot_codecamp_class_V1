import * as S from "./boardsList.styles";
import { dateFormatter } from "../../../../commons/utils/utils";

export default function BoardListPresenter(P) {
  return (
    <S.Container>
      <S.Title>리스트</S.Title>

      <S.BestListWrapper className="베스트 게시글 랩퍼">
        <S.BestBoard className="게시글리스트"></S.BestBoard>
        베스트 게시글 자리 예정
      </S.BestListWrapper>
      <S.SearchbarWrapper className="검색랩퍼">
        {/* <S.SearchData className="날짜바">YYYY-MM-DD ~ YYYY-MM-DD</S.SearchData> */}
        <S.SearchWordWrapper>
          <S.SearchWord className="검색바" placeholder="검색어를 입력하세요." />
          <S.SearchButton>
            <S.SearchIcon src="/search_icon.png" />
          </S.SearchButton>
        </S.SearchWordWrapper>
      </S.SearchbarWrapper>
      <S.ListContainer className="게시판래퍼">
        <S.ListWrapper className="게시판 리스트">
          <S.ListTop className="게시판 메뉴바">
            <S.ListNumber>번호</S.ListNumber>
            <S.ListTitle>제목</S.ListTitle>
            <S.ListWriter>작성자</S.ListWriter>
            <S.ListDate>날짜</S.ListDate>
          </S.ListTop>

          {P.data?.fetchBoards?.map((el, i) => (
            <S.ListContent key={el._id}>
              <S.ContentNumber>{i + 1}</S.ContentNumber>
              <S.ContentTitle>{el.title}</S.ContentTitle>
              <S.ContentWriter>{el.writer}</S.ContentWriter>
              <S.ContentDate>{dateFormatter(el.createdAt)}</S.ContentDate>
            </S.ListContent>
          ))}
        </S.ListWrapper>
        <S.ListFooter>
          <S.ListNumbering className="페이지 넘버링">
            1 | 2 | 3 | 4 | 5
          </S.ListNumbering>
          <S.ContentButton>글쓰기</S.ContentButton>
        </S.ListFooter>
      </S.ListContainer>
    </S.Container>
  );
}
