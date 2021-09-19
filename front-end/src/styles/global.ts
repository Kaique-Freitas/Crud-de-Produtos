import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;


    }

    body, input, textarea, button{ //font will be apply in body, input ...
    font-family: 'Poppings', sans-serif;
    font-weight: 400;

    }
    button{
        cursor: pointer
    }
`;
