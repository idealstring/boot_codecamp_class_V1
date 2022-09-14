import { IQuery } from "../../../../commons/types/generated/types";

// presenter
export type ICommentListPresenterProps = {
  existingData?: Pick<IQuery, "fetchBoardComments">;
};

// presenterItem
export type ICommentListPresenterItemProps = {
  comment: any;
};
