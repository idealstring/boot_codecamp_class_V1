import BoardListPresenter from "./boardsList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./boardsList.queries";
import { useRouter } from "next/router";

export default function BoardListContainer() {
  const { data: fetchBoards } = useQuery(FETCH_BOARDS);
  const { data: fetchBoardsOfTheBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  const onClickToWrite = () => {
    router.push("/boards/new");
  };

  return (
    <BoardListPresenter
      fetchBoardsOfTheBest={fetchBoardsOfTheBest}
      fetchBoards={fetchBoards}
      onClickToWrite={onClickToWrite}
    />
  );
}
