/// <reference types="node" />
import '../next-server/server/node-polyfill-fetch';
declare type RuntimeConfig = any;
export declare function loadStaticPaths(distDir: string, pathname: string, serverless: boolean, config: RuntimeConfig): Promise<Pick<import("../types").GetStaticPathsResult<import("querystring").ParsedUrlQuery>, "fallback"> & {
    paths: string[];
}>;
export {};
