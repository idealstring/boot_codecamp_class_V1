// container

import { IQuery } from "../../../../commons/types/generated/types";

export type IMyPagePresenterProps = {
  fetchLoggedData: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
};

// style

export type IMyPageStylesProps = {
  isNormalScreen?: boolean;
};
