import { Request, Response } from "express";
import { Products } from "../models/Products";
import { v4 as uuid } from "uuid";

interface ProductsController {
  list: (request: Request, response: Response) => void;
  view: (request: Request, response: Response) => void;
  register: (request: Request, response: Response) => void;
  update: (request: Request, response: Response) => void;
  delete: (request: Request, response: Response) => void;
}

export const productsController: ProductsController = {
  list: async (request, response) => {
    await Products.findAll()
      .then((products) => response.json({ error: false, products }))
      .catch((err) => response.json({ error: true, err }));
  },
  view: async (request, response) => {
    const { id } = request.params;
    await Products.findByPk(id)
      .then((product) => response.json({ error: false, product }))
      .catch((err) => response.json({ error: true, message: err }));
  },
  register: async (request, response) => {
    const { name, price, quantity } = request.body;
    await Products.create({ id: uuid(), name, price, quantity })
      .then(() =>
        response.json({
          error: false,
          message: "Product created with successfully.",
        })
      )
      .catch((error) =>
        response.status(400).json({ error: true, message: error })
      );
  },
  update: async (request, response) => {
    const { id } = request.params;
    const data = request.body;

    const productNotExists = await Products.findByPk(id);
    if (!productNotExists) {
      response.json({ error: true, message: "Product not exists." });
    }
    await Products.update(data, { where: { id } })
      .then(() =>
        response.json({
          error: false,
          message: "Product updated with successfully.",
        })
      )
      .catch((err) => response.json({ error: true, err }));
  },
  delete: async (request, response) => {
    const { id } = request.params;
    await Products.destroy({ where: { id } })
      .then(() =>
        response.json({
          error: false,
          message: "Product deleted with successfully.",
        })
      )
      .catch((err) => response.json({ error: true, err }));
  },
};
