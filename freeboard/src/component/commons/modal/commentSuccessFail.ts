import { Modal } from "antd";

export function CommentFail(message: string) {
  Modal.error({
    content: message,
    centered: true,
    onOk() {},
  });
}
