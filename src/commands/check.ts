import * as dotenv from "dotenv";
import { getAppInfo } from "../utils";
import { platform, arch, release, type } from "os";

export default () => {
    const env = dotenv.config();

    console.log(`Disco version - ${getAppInfo('version')}`);
    console.log(`Node version - ${process.versions.node}`);
    console.log(`Platform - ${type} ${release} ${platform} ${arch}`);
    console.log(`Environment file - ${env.error ? "❌  Not found" : "✔  Present"}`);
}