import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export type IPaginationProps = {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  boardsCount: number;
};

// styles

export type IActiveProps = {
  active: boolean;
};
