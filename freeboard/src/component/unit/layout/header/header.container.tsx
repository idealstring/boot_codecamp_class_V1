import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import HeaderPresenter from "./header.presenter";
import { FETCH_USEDITEMS_IPICKED } from "./header.queries";
import { IHeaderContainerProps } from "./header.types";

export default function HeaderContainer(P: IHeaderContainerProps) {
  const { onClickIsNav } = P;
  const router = useRouter();
  const { data: IPickItemData } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickRegister = () => {
    router.push("/users/new");
  };

  const onClickSignIn = () => {
    router.push("/users/signIn");
  };

  const onClickMyPage = async () => {
    await router.push(`/users/mypage`);
  };

  return (
    <>
      <HeaderPresenter
        onClickIsNav={onClickIsNav}
        onClickLogo={onClickLogo}
        onClickRegister={onClickRegister}
        onClickSignIn={onClickSignIn}
        onClickMyPage={onClickMyPage}
        IPickItemData={IPickItemData}
      />
    </>
  );
}
