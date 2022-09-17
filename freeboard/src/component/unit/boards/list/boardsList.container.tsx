import BoardListPresenter from "./boardsList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./boardsList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardListContainer() {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const { data: fetchBoardsData } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);
  const { data: fetchBoardsOfTheBestDate } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  const onClickToWrite = async () => {
    await router.push("/boards/new");
  };

  const onClickDateOpen = () => {
    setIsDateOpen((isDateOpen) => !isDateOpen);
  };

  return (
    <BoardListPresenter
      fetchBoardsOfTheBestDate={fetchBoardsOfTheBestDate}
      fetchBoardsData={fetchBoardsData}
      onClickToWrite={onClickToWrite}
      onClickDateOpen={onClickDateOpen}
      isDateOpen={isDateOpen}
    />
  );
}
