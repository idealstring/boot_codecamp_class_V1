import CommentListPresenter from "./commentList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./commentList.queries";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function CommentListContainer() {
  const router = useRouter();

  const { data: existingData } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 1,
      boardId: String(router.query.detail),
    },
  });

  return <CommentListPresenter existingData={existingData} />;
}
