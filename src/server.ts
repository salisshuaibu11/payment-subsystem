import * as mongoose from "mongoose";
import "dotenv/config";

import App from "./app";
import PostsController from "./posts/post.controller";
import validateEnv from "./utils/validateEnv";

import * as express from "express";
import * as bodyParser from "body-parser";

validateEnv();

const { MONGO_URI, PORT } = process.env;
mongoose.connect(MONGO_URI);
const router = express.Router();

router.get("/", (request, response) => {
  response.send("Hello world!");
});

router.get("/hello", (request, response) => {
  response.send("Hello world!");
});

const app = new App([new PostsController()], "5000");

app.use(bodyParser.json());
app.use("/", router);
app.use("/api", router);

app.listen();
