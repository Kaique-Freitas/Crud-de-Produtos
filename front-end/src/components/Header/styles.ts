import styled from "styled-components";

export const Container = styled.div`
  background: rgb(61, 162, 172);
`;

export const Content = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  height: 150px;

  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: rgb(27, 124, 133);

    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: x-large;
  color: rgb(248, 248, 248);
`;
