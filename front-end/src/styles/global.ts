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

    .react-modal-overlay{
        position: fixed;
        background-color: rgba(0,0,0,0.5);
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        background-color: white;
        width: 100%;
        max-width: 570px;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: transparent;
        border: none;
        color: red;

        transition: 0.2s;

        &:hover{
            filter: brightness(0.8)
        }
    }
`;
