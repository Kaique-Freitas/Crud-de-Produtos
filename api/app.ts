import express from "express";
import cors from "cors";
import { productsRouter } from "./routes/productsRoutes";

const app = express();

app.use(express.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, X-Forwarder-For, Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

app.use("/products", productsRouter);

app.listen(process.env.PORT || 3001);
