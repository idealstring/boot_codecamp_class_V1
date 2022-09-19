import { MouseEvent, useState } from "react";
import { start } from "repl";
import * as S from "./pagination.styles";
import { IPaginationProps } from "./pagination.types";

export default function PaginationContainer(P: IPaginationProps) {
  const { refetch, currentPage, setCurrentPage, boardsCount } = P;
  const [startPage, setStartPage] = useState<number>(1);
  const lastPage = boardsCount / 10;
  console.log(boardsCount);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: Number(startPage - 10) });
  };
  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: Number(startPage + 5) });
    } else {
      return;
    }
  };
  const onClickPage = (e: MouseEvent<HTMLButtonElement>) => {
    void refetch({ page: Number(e.currentTarget.id) });
    setCurrentPage(Number(e.currentTarget.id));
  };

  return (
    <S.PaginationWrapper>
      <S.PagePrevNextBtn onClick={onClickPrevPage}>이전</S.PagePrevNextBtn>
      {new Array(5)
        .fill(1)
        .filter((_, i) => startPage + i <= lastPage)
        .map((_, i) => (
          <S.PageBtn
            key={startPage + i}
            id={String(startPage + i)}
            onClick={onClickPage}
            active={Number(startPage + i) === currentPage}
          >
            {startPage + i}
          </S.PageBtn>
        ))}
      <S.PagePrevNextBtn onClick={onClickNextPage}>다음</S.PagePrevNextBtn>
    </S.PaginationWrapper>
  );
}
