import { createGlobalStyle } from "styled-components";
import { blackMedium, grayLight } from "./UI/Variaveis";

export const GlobalStyles = createGlobalStyle`
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
      }

      h1, h2, h3, h4, h5, h6, p, a {
            font-family: "Roboto", sans serif;
            color: ${grayLight};
      }

      body {
            background-color: ${blackMedium};
      }
`;