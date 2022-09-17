import { IQuery } from "../../../../commons/types/generated/types";

export type IBoardListPresenterProps = {
  fetchBoardsOfTheBestDate?: Pick<IQuery, "fetchBoardsOfTheBest">;
  fetchBoardsData?: Pick<IQuery, "fetchBoards">;
  onClickToWrite: () => void;
  onClickDateOpen: () => void;
  isDateOpen: boolean;
};
