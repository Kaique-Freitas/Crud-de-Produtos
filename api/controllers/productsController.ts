import { Request, Response } from "express";

interface ProductsController {
  list: (request: Request, response: Response) => void;
  register: (request: Request, response: Response) => void;
  update: (request: Request, response: Response) => void;
  delete: (request: Request, response: Response) => void;
}

export const productsController: ProductsController = {
  list: async (request, response) => {
    return response.json({error: false});
  },
  register: (request, response) => {
    return response.json({error: false});
  },
  update: (request, response) => {
    return response.json();
  },
  delete: (request, response) => {
    return response.json();
  },
};