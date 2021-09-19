import {Router} from "express"

export const productsRouter = Router()

productsRouter.get("/products");

productsRouter.post("/products/");

productsRouter.put("/products/");

productsRouter.delete("/products/");