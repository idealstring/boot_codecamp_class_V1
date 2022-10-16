import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import { CREATE_USEDITEM_QUESTION_ANSWER } from "./replyWrite.quries";
import { IReplayWriteContainerProps } from "./replyWrite.types";
import ReplayWritePresenter from "./replyWrite.presenter";

export default function ReplayWriteContainer(P: IReplayWriteContainerProps) {
  const { questionsId } = P;
  const [createQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);
  const { register, handleSubmit, formState, setValue } = useForm();

  const onClickCreateAnswer = async (data: any) => {
    console.log(data, questionsId);
    try {
      const result = await createQuestionAnswer({
        variables: {
          useditemQuestionId: questionsId,
          createUseditemQuestionAnswerInput: {
            ...data,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [...prev, data?.createUseditemQuestionAnswer];
              },
            },
          });
        },
      });
      setValue("contents", "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <ReplayWritePresenter
        onClickCreateAnswer={onClickCreateAnswer}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    </>
  );
}
