"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
function getAppInfo(key) {
    const packageJson = require(path.resolve(__dirname, "../../package.json"));
    return packageJson[key];
}
exports.getAppInfo = getAppInfo;
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.capitalize = capitalize;
function reactify(string) {
    const stringArr = string.split("-");
    return stringArr.map(s => capitalize(s)).join("");
}
exports.reactify = reactify;
