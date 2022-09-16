import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  height: 500px;
  display: flex;
`;

// 특정페이지에서 제외하고 싶을 때
const HIDDEN_HEADERS = ["/12-02-library-star", "/12-03-modal-alert"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <div>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <Body>
        <div>사이드바</div>
        <div>{props.children}</div>
      </Body>
      <LayoutFooter />
    </div>
  );
}
