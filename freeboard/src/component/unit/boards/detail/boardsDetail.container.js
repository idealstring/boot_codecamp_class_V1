import BoardDetailPresenter from "./boardsDetail.presenter";
import { useQuery, useMutation, ApolloError } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./boardsDetail.queries";
import { useState, useEffect } from "react";

export default function BoardDetailContainer() {
  const router = useRouter();
  const [modal, setModal] = useState({ link: false, map: false });
  const [likeUp] = useMutation(LIKE_BOARD);
  const [dislikeUp] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detail,
    },
  });
  // console.log(data);
  // console.log(data.fetchBoard.likeCount);
  // useEffect(() => {

  // }, [data]);

  const onRolloverLinkModal = () => {
    setModal((modal) => {
      return { ...modal, link: !modal.link };
    });
  };
  const onRolloverMapModal = () => {
    setModal((modal) => {
      return { ...modal, map: !modal.map };
    });
  };
  const onclickLikeButton = async () => {
    try {
      await likeUp({
        variables: {
          boardId: router.query.detail,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.detail,
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const onclickDislikeButton = async () => {
    try {
      await dislikeUp({
        variables: {
          boardId: router.query.detail,
        },
        // refetchQueries: [
        //   { query: DISLIKE_BOARD }, // DocumentNode object parsed with gql
        //   "dislikeBoard", // Query name
        // ],
        refetchQueries: ["ReallyImportantQuery"],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToList = () => {
    router.push("/boards");
  };
  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.detail}/edit`);
  };

  return (
    <BoardDetailPresenter
      data={data}
      onRolloverLinkModal={onRolloverLinkModal}
      onRolloverMapModal={onRolloverMapModal}
      modal={modal}
      onclickLikeButton={onclickLikeButton}
      onclickDislikeButton={onclickDislikeButton}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
