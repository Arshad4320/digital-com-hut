import express, { Router } from "express";
import { Application } from "express";
import cors from "cors";
import router from "./app/routes";

export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);
