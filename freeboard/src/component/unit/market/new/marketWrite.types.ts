import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

// container

export type IMarketContainerProps = {
  isEdit: boolean;
  existingData?: Pick<IQuery, "fetchUseditem"> | undefined;
  loading: any;
};

type IValueProps = {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: string;
  useditemAddress?: {
    lng?: string;
    lat?: string;
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
};

// presenter

export type IMarketPresenterProps = {
  onClickSubmit: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
  setValue: UseFormSetValue<IValueProps>;
  register: UseFormRegister<IValueProps>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => Promise<void>;
  isEdit: boolean;
  existingData?: Pick<IQuery, "fetchUseditem"> | undefined;
};

// styles

export type IMarketWriteStylesProps = {
  isNormalScreen?: Boolean;
  isActive?: boolean;
};
