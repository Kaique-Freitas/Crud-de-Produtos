import axios from "axios";

export const api = axios.create({
  baseURL: "https://cadastro--produtos.herokuapp.com/products",
});
