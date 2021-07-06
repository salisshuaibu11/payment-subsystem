import "dotenv/config";
import App from "./app";
import PostsController from "./posts/post.controller";
import AuthenticationController from "./authentication/authentication.controller";
import validateEnv from "./utils/validateEnv";

validateEnv();

const app = new App([new PostsController(), new AuthenticationController()]);

app.listen();
