import CommentListPresenter from "./commentList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./commentList.queries";

export default function CommentListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 1,
      boardId: router.query.detail,
    },
  });

  // console.log(data);
  return <CommentListPresenter data={data} />;
}
