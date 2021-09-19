import express from "express";
import { productsRouter } from "./routes/productsRouter";

const app = express();

app.use(express.json());

app.use('/proudcts', productsRouter);

app.listen(process.env.PORT || 3001);
