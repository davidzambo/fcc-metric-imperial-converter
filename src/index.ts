import * as dotenv from "dotenv";
import { Application } from "./server";
dotenv.config();

const server: Application = new Application(process.env.PORT || 3000);

server.init();

