"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertController_1 = require("./controllers/ConvertController");
const HomeController_1 = require("./controllers/HomeController");
class Router {
    static initializePaths(app) {
        console.log('run');
        app.all("/", HomeController_1.HomeController.show);
        app.all("/api/convert", ConvertController_1.ConvertController.convert);
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map