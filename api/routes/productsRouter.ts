import { Router } from "express";

export const productsRouter = Router();

productsRouter.get("/", (request, response) => {
    response.json('get')
});

productsRouter.post("/create", (request, response) => {});

productsRouter.put("/update/:id", (request, response) => {});

productsRouter.delete("/delete/:id", (request, response) => {});
