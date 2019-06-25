import * as path from "path";

export function getAppInfo(key: string) {
    const packageJson = require(path.resolve(__dirname, "../package.json"));

    return packageJson[key];
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reactify(string: string) {
    const stringArr = string.split("-");

    return stringArr.map(s => capitalize(s)).join("");
}