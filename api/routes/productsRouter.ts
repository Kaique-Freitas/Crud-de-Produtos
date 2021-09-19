import { Router } from "express";

export const productsRouter = Router();

productsRouter.get("/products");

productsRouter.post("/products/create");

productsRouter.put("/products/update/:id");

productsRouter.delete("/products/delete/:id");
