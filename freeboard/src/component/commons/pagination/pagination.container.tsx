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
      <S.PagePrevNextBtn onClick={onClickPrevPage}>
        {" "}
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          transform="rotate(180)"
        >
          <path d="M444.081633 689.632653c-5.22449 0-10.44898-2.089796-14.628572-6.269388-8.359184-8.359184-8.359184-21.420408 0-29.779592l156.734694-156.734693c8.359184-8.359184 21.420408-8.359184 29.779592 0 8.359184 8.359184 8.359184 21.420408 0 29.779591l-156.734694 156.734694c-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z" />
          <path d="M600.816327 532.897959c-5.22449 0-10.44898-2.089796-14.628572-6.269388l-156.734694-156.734693c-8.359184-8.359184-8.359184-21.420408 0-29.779592 8.359184-8.359184 21.420408-8.359184 29.779592 0l156.734694 156.734694c8.359184 8.359184 8.359184 21.420408 0 29.779591-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z" />
          <path d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z" />
        </svg>
      </S.PagePrevNextBtn>
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
      <S.PagePrevNextBtn onClick={onClickNextPage}>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
        >
          <path d="M444.081633 689.632653c-5.22449 0-10.44898-2.089796-14.628572-6.269388-8.359184-8.359184-8.359184-21.420408 0-29.779592l156.734694-156.734693c8.359184-8.359184 21.420408-8.359184 29.779592 0 8.359184 8.359184 8.359184 21.420408 0 29.779591l-156.734694 156.734694c-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z" />
          <path d="M600.816327 532.897959c-5.22449 0-10.44898-2.089796-14.628572-6.269388l-156.734694-156.734693c-8.359184-8.359184-8.359184-21.420408 0-29.779592 8.359184-8.359184 21.420408-8.359184 29.779592 0l156.734694 156.734694c8.359184 8.359184 8.359184 21.420408 0 29.779591-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z" />
          <path d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z" />
        </svg>
      </S.PagePrevNextBtn>
    </S.PaginationWrapper>
  );
}
