import { css } from "@emotion/react";
import { StyleSet } from "./styleSet";

export const GlobalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0 auto;
    font-family: NanumSquare_acR, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-size: 16px;
  }

  .ant-btn-primary {
    border-color: ${StyleSet.colors.point01};
    background: ${StyleSet.colors.point01};
  }

  @media (prefers-color-scheme: light) {
    html {
      color-scheme: light;
    }
    body {
      color: ${StyleSet.colors.black};
      background: ${StyleSet.colors.backgroundWhite};
    }

    h1,
    h2,
    h3 {
      color: ${StyleSet.colors.black};
    }

    svg g {
      fill: ${StyleSet.colors.black};
    }

    .grayMutation {
      background-color: ${StyleSet.colors.lightGray01};
    }

    .ListContent:hover {
      background-color: ${StyleSet.colors.lightGray01};
    }
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: ${StyleSet.colors.white};
      background: ${StyleSet.colors.backgroundBlack};
    }

    h1,
    h2,
    h3 {
      color: ${StyleSet.colors.white};
    }

    svg g {
      fill: ${StyleSet.colors.white};
    }

    .grayMutation {
      background-color: ${StyleSet.colors.black};
    }

    .ListContent:hover {
      background-color: ${StyleSet.colors.gray};
    }
  }

  @font-face {
    font-family: "NanumSquare_acR";
    src: url("/fonts/NanumSquare_acR.ttf");
  }
`;
