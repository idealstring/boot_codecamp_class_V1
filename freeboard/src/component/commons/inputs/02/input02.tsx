import styled from "@emotion/styled";
import { StyleSet } from "../../../../commons/style/styleSet";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  width: 100%;

  border: none;
  border-bottom: 1px solid ${StyleSet.colors.lightGray02};
  font-size: ${StyleSet.fontSize.h2};
  background-color: transparent;
`;

type IInput02Props = {
  type: "text";
  register: UseFormRegisterReturn;
  placeholder: string;
  error?: any;
};

export default function Input02(P: IInput02Props) {
  const { type, register, placeholder, error } = P;
  return (
    <Input type={type} placeholder={placeholder} {...register} error={error} />
  );
}
