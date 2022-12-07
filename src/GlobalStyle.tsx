import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    }

    body {
    font-family: 'NanumSquare';
    line-height: 1.5;
    font-size: 1rem;
    }

    * {
    margin: 0;
    }

    h2 {
    font-size: 1.5rem;
    }

    p {
    font-size: 1rem;
    }
`;

export default GlobalStyle;
