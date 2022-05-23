import express, { Request, Response } from "express";
import { urlencoded } from "body-parser";
import env from "./loadEnv";
import errorHandle from "./controllers/errorHandle";
import example from "./routers/example";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

const port = env.SERVER_PORT;

app.listen(port, () => {
  console.log(`process ${process.pid} Listening on port ${port}!`);
});

app.all("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    version: env.version,
    info: "success",
    message: "A Template Server is Connected Successfully!",
  });
});

app.use("/example", example);

app.use(errorHandle);

console.log(`Manager Server Version : ${env.version}`);
