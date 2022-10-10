import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

// presenter
export type ICommentListPresenterProps = {
  existingData?: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  onLoadMore: () => void;
};

// presenterItem
export type ICommentListPresenterItemProps = {
  questions: IUseditemQuestion;
};
