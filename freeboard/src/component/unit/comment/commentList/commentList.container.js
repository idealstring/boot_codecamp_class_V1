import CommentListPresenter from "./commentList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./commentList.queries";

export default function CommentListContainer() {
  const router = useRouter();

  const { data: existingData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 1,
      boardId: router.query.detail,
    },
  });

  return <CommentListPresenter existingData={existingData} />;
}
