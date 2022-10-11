import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import MarketDetailPresenter from "./marketDetail.presenter";
import { FETCH_USED_ITEM, FETCH_USER_LOGGED_IN } from "./marketDetail.queries";

export default function MarketDetailContainer() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.detail),
    },
  });
  const { data: fetchUserData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const imageUrl = data?.fetchUseditem?.images?.[0];

  useEffect(() => {
    if (data) {
      if (localStorage.getItem("recentItems")) {
        let getItems = JSON.parse(String(localStorage.getItem("recentItems")));
        const setItem = {
          id: router.query.detail,
          imageUrl: imageUrl,
        };

        const temp = getItems.filter((el: any) => el.id === setItem.id);
        if (temp.length === 1) return;
        getItems.unshift(setItem);
        if (getItems.length > 5) {
          getItems.pop();
        }
        localStorage.setItem("recentItems", JSON.stringify(getItems));
      } else {
        const setItem = [
          {
            id: router.query.detail,
            imageUrl: imageUrl,
          },
        ];
        localStorage.setItem("recentItems", JSON.stringify(setItem));
      }
    }
  }, [data]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=197590e1eca014c399a79f6900e8f800";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat,
            data?.fetchUseditem.useditemAddress?.lng
          ),
          level: 2,
        };

        // 마커
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          data?.fetchUseditem.useditemAddress?.lat,
          data?.fetchUseditem.useditemAddress?.lng
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }, [data]);

  return (
    <>
      <MarketDetailPresenter data={data} fetchUserData={fetchUserData} />
    </>
  );
}
