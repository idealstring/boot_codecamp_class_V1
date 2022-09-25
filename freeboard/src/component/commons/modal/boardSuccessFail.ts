import { Modal } from "antd";

export function CreateBoardSuccess() {
  Modal.success({
    content: "게시물 등록 완료했습니다.",
    centered: true,
    onOk() {},
  });
}

export function UpdateBoardSuccess() {
  Modal.success({
    content: "게시물 수정 완료했습니다.",
    centered: true,
    onOk() {},
  });
}

export function PostFail(message: string) {
  Modal.error({
    content: message,
    centered: true,
    onOk() {},
  });
}
