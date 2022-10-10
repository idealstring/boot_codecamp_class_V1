import MarketCommentList from "../../../src/component/commons/comment/market/commentList";
import MarektCommentWrite from "../../../src/component/commons/comment/market/commentWrite";
import MarketDetailContainer from "../../../src/component/unit/market/detail/marketDetail.container";

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetailContainer />
      <MarektCommentWrite />
      <MarketCommentList />
    </>
  );
}
