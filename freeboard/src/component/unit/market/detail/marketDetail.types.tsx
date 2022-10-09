// presenter

import { IQuery } from "../../../../commons/types/generated/types";

export type IMarketDetailPresenterProps = {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
};

// style

export type IMarketDetailStylesProps = {
  isMobile?: boolean;
};
