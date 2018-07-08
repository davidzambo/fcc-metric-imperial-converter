"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet = require("helmet");
const router_1 = require("./router");
class Application {
    constructor(port) {
        this.PORT = null;
        this.PORT = port;
        this.app = express();
    }
    init() {
        this.app.set("views", "./dist/views");
        this.app.set("view engine", "pug");
        this.app.use(express.static("./dist/public"));
        this.app.use(helmet());
        this.app.use(helmet.hidePoweredBy({ setTo: "PHP 5.1" }));
        router_1.Router.initializePaths(this.app);
        this.app.listen(this.PORT, () => {
            // tslint:disable-next-line
            console.log("Server is up and running on port " + this.PORT);
        });
    }
}
exports.Application = Application;
//# sourceMappingURL=server.js.map