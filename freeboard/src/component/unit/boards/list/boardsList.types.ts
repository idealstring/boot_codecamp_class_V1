import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export type IBoardListPresenterProps = {
  fetchBoardsOfTheBestDate?: Pick<IQuery, "fetchBoardsOfTheBest">;
  fetchBoardsData?: Pick<IQuery, "fetchBoards">;
  onClickToWrite: () => void;
  onClickDateOpen: () => void;
  isDateOpen: boolean;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  boardsCount: number;
};
