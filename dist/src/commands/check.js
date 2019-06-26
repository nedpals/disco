"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const utils_1 = require("../utils");
const os_1 = require("os");
exports.default = () => {
    const env = dotenv.config();
    console.log(`Disco version - ${utils_1.getAppInfo('version')}`);
    console.log(`Node version - ${process.versions.node}`);
    console.log(`Platform - ${os_1.type} ${os_1.release} ${os_1.platform} ${os_1.arch}`);
    console.log(`Environment file - ${env.error ? "❌  Not found" : "✔  Present"}`);
};
