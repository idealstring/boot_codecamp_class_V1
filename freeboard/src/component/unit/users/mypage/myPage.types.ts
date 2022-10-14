import { IQuery } from "../../../../commons/types/generated/types";

// presenter

export type IMyPagePresenterProps = {
  fetchPointTransactions: Pick<IQuery, "fetchPointTransactions"> | undefined;
  fetchUserLoggedIn: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
};

// style

export type IMyPageStylesProps = {
  // isNormalScreen?: boolean;
};
