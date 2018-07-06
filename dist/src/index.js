"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const server_1 = require("./server");
dotenv.config();
const server = new server_1.Application(process.env.PORT || 3000);
server.init();
//# sourceMappingURL=index.js.map