import MarketCommentWriteContainer from "../../../unit/comment/market/commentWrite/commentWrite.container";

export default function CommentUpdate() {
  return (
    <MarketCommentWriteContainer
      isEdit={true}
      onClickIsEditToggle={() => null}
    />
  );
}
