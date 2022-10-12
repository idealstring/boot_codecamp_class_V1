import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import MarketPresenter from "./marketWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./marketWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "../../../commons/hooks/useAuth";
import { IMarketContainerProps } from "./marketWrite.types";

export default function MarketContainer(P: IMarketContainerProps) {
  useAuth();
  const { isEdit, existingData, loading } = P;
  const [fileUrls, setFileUrls] = useState(["", ""]);
  const router = useRouter();
  const schema = yup.object({
    name: yup.string().required(),
    remarks: yup.string().required(),
    price: yup.number().required(),
    contents: yup.string().required(),
    tags: yup.string(),
    useditemAddress: yup.object({
      lat: yup.number(),
      lng: yup.number(),
      zipcode: yup.string(),
      address: yup.string(),
      addressDetail: yup.string(),
    }),
  });
  const { register, handleSubmit, formState, setValue, getValues, control } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
      defaultValues: {
        name: "",
        remarks: "",
        contents: "",
        price: 0,
        tags: "",
        useditemAddress: {
          lng: "",
          lat: "",
          zipcode: "",
          address: "",
          addressDetail: "",
        },
      },
    });
  const address = useWatch({ control, name: "useditemAddress.address" });
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  useEffect(() => {
    if (!loading) {
      if (!existingData) return;

      setValue("name", existingData?.fetchUseditem.name);
      setValue("remarks", existingData?.fetchUseditem.remarks);
      setValue("contents", existingData?.fetchUseditem.contents);
      setValue("price", existingData?.fetchUseditem.price);
      setValue("tags", existingData?.fetchUseditem.tags);
      setValue("useditemAddress", existingData?.fetchUseditem.useditemAddress);

      existingData?.fetchUseditem.images
        ? setFileUrls(existingData?.fetchUseditem.images)
        : ["", ""];
    }
  }, [loading]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=197590e1eca014c399a79f6900e8f800&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          getValues("useditemAddress.address"),
          function (
            result: {
              y: any;
              x: any;
            }[],
            status: any
          ) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              console.log(coords);
              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래 위치</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              setValue("useditemAddress.lat", coords.Ma);
              setValue("useditemAddress.lng", coords.La);
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [address]);

  const onChangeFileUrls = async (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: fileUrls,
          },
        },
      });
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: String(router.query.detail),
          updateUseditemInput: {
            ...data,
            images: fileUrls,
          },
        },
      });
      router.push(`/market/${result.data?.updateUseditem._id}`, undefined, {
        shallow: true,
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <MarketPresenter
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        register={register}
        setValue={setValue}
        handleSubmit={handleSubmit}
        formState={formState}
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}
        isEdit={isEdit}
        existingData={existingData}
      />
    </>
  );
}
