import { Router } from "express";
import { productsController } from "../controllers/productsController";

const { list, register, update, view } = productsController;

export const productsRouter = Router();

productsRouter.get("/", list);

productsRouter.post("/register", register);

productsRouter.get("/product/:id", view);

productsRouter.put("/update/:id", update);

productsRouter.delete("/delete/:id", productsController.delete);
