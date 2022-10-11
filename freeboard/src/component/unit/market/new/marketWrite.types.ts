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

// presenter

export type IMarketPresenterProps = {
  onClickSubmit: (data: any) => Promise<void>;
  // onClickSubmit: (
  //   data: FieldValues
  // ) => (
  //   event?: BaseSyntheticEvent<object, any, any> | undefined
  // ) => Promise<any>;
  onClickUpdate: (data: any) => Promise<void>;
  setValue: UseFormSetValue<{
    name: string;
    remarks: string;
    contents: string;
    price: number;
    tags: string;
    useditemAddress: {
      lng: string;
      lat: string;
      zipcode: string;
      address: string;
      addressDetail: string;
    };
  }>;
  register: UseFormRegister<{
    name: string;
    remarks: string;
    contents: string;
    price: number;
    tags: string;
    useditemAddress: {
      zipcode: string;
      address: string;
      addressDetail: string;
      lng: string;
      lat: string;
    };
  }>;
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
