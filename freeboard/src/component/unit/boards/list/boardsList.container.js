import BoardListPresenter from "./boardsList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./boardsList.queries";

export default function BoardListContainer() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  return <BoardListPresenter data={data} />;
}
