import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: #969cb3;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      color: #969cb3;
      border-radius: 0.25rem;

      &:first-child {
        color: black;
      }
    }
    td.critical{border: red; color: red; width: 15px; text-align: center; :hover{background: red; color: white}}
    td.alert{color: rgb(255,215,0); width: 15px; text-align: center; :hover{background: rgb(255,215,0); color: white}}
    td.ok{color: rgb(0,191,255); width: 15px; text-align: center; :hover{background:  rgb(0,191,255); color: white}}


    button {
        background: transparent;
        border: solid 0.01rem;
        border-radius: 0.25rem;
        margin-left: 5px;
        img {
            width: 25px;
            height: 25px;
        }
    }
  }
`;
