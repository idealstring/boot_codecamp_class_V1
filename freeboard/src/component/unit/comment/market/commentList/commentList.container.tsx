import MarketCommentListPresenter from "./commentList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_QUESTIONS } from "./commentList.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";

export default function MarketCommentListContainer() {
  const router = useRouter();
  const { data: existingData, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.detail),
      page: 1,
    },
  });

  const onLoadMore = () => {
    console.log("more");
    if (!existingData) return;
    fetchMore({
      variables: {
        page: Math.ceil(existingData.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(fetchMoreResult.fetchUseditemQuestions);
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <MarketCommentListPresenter
      existingData={existingData}
      onLoadMore={onLoadMore}
    />
  );
}
