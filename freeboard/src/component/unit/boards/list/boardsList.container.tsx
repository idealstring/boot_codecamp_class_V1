import _ from "lodash";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import BoardListPresenter from "./boardsList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./boardsList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardListContainer() {
  const [isDateOpen, setIsDateOpen] = useState(false);

  const { data: fetchBoardsData, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: fetchBoardsOfTheBestDate } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);
  const { data: boardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const router = useRouter();

  const onClickToWrite = async () => {
    await router.push("/boards/new");
  };

  const onClickDateOpen = () => {
    setIsDateOpen((isDateOpen) => !isDateOpen);
  };

  const getDebounce = _.debounce((value) => {
    refetch({
      search: value,
      page: 1,
    });
  }, 400);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  return (
    <BoardListPresenter
      fetchBoardsOfTheBestDate={fetchBoardsOfTheBestDate}
      fetchBoardsData={fetchBoardsData}
      onClickToWrite={onClickToWrite}
      onClickDateOpen={onClickDateOpen}
      isDateOpen={isDateOpen}
      refetch={refetch}
      boardsCount={boardsCount?.fetchBoardsCount}
      onChangeSearch={onChangeSearch}
    />
  );
}
