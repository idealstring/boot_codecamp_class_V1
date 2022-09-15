import CommentList from "../../../src/component/commons/comment/commentList";
import CommentWrite from "../../../src/component/commons/comment/commentWrite";
import BoardDetailContainer from "../../../src/component/unit/boards/detail/boardsDetail.container";

export default function DetailPage() {
  return (
    <>
      <BoardDetailContainer />
      <CommentWrite />
      <CommentList />
    </>
  );
}
