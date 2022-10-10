import MarketCommentListPresenterItem from "./commentList.presenterItem";
import * as S from "./commentList.styles";
import { ICommentListPresenterProps } from "./commentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketCommentListPresenter(
  P: ICommentListPresenterProps
) {
  const { existingData, onLoadMore } = P;

  return (
    <InfiniteScroll pageStart={1} loadMore={onLoadMore} hasMore={true}>
      <S.CommentWrapper>
        {existingData?.fetchUseditemQuestions.map((questions) => (
          <MarketCommentListPresenterItem
            key={questions._id}
            questions={questions}
          />
        ))}
      </S.CommentWrapper>
    </InfiniteScroll>
  );
}
