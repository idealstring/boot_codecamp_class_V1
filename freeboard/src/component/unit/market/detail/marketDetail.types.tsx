// presenter

import { IQuery } from "../../../../commons/types/generated/types";

export type IMarketDetailPresenterProps = {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  fetchUserData: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
};

// style

export type IMarketDetailStylesProps = {
  isMobile?: boolean;
};
