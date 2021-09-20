import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: black;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: rgb(27, 124, 133);
    border-radius: 10px;
    border: none;
    margin-top: 1.5rem;
    font-weight: 600;
    color: white;
    font-size: 1rem;

    transition: 0.2s;
    :hover {
      filter: brightness(0.9);
    }
  }
`;
