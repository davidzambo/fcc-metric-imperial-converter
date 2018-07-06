import * as express from "express";
import * as helmet from "helmet";
import * as pug from "pug";
import { Router } from "./router";

interface ApplicationInterface {
    PORT: string | number;
    app: express.Application;
}

export class Application implements ApplicationInterface {
    public app: express.Application;
    public PORT: string | number = null;

    public constructor(port: string | number) {
        this.PORT = port;
        this.app = express();
    }

    public init() {
        this.app.set("views", "./dist/views");
        this.app.set("view engine", "pug");
        this.app.use(express.static("./dist/public"));
        this.app.use(helmet());
        this.app.use(helmet.hidePoweredBy({setTo: "PHP 5.1"}));

        Router.initializePaths(this.app);

        this.app.listen(this.PORT, () => {
            // tslint:disable-next-line
            console.log("Server is up and running on port " + this.PORT);
        });
    }
}
