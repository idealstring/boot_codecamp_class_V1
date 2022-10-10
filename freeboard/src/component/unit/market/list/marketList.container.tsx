import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import MarketListPresenter from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketListContainer() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  return (
    <>
      <MarketListPresenter data={data} />
    </>
  );
}
