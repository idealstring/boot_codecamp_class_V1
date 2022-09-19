import { css } from "@emotion/react";

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

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
  @font-face {
    font-family: "NanumSquare_acR";
    src: url("/fonts/NanumSquare_acR.ttf");
  }
`;