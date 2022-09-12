import BoardListPresenter from "./boardsList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./boardsList.queries";
import { useRouter } from "next/router";

export default function BoardListContainer() {
  const { data: fetchBoardsData } = useQuery(FETCH_BOARDS);
  const { data: fetchBoardsOfTheBestDate } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  const onClickToWrite = () => {
    router.push("/boards/new");
  };

  return (
    <BoardListPresenter
      fetchBoardsOfTheBestDate={fetchBoardsOfTheBestDate}
      fetchBoardsData={fetchBoardsData}
      onClickToWrite={onClickToWrite}
    />
  );
}
