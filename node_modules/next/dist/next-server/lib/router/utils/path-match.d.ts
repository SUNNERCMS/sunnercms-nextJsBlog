import * as pathToRegexp from 'next/dist/compiled/path-to-regexp';
export { pathToRegexp };
export declare const matcherOptions: {
    sensitive: boolean;
    delimiter: string;
    decode: typeof decodeParam;
};
export declare const customRouteMatcherOptions: {
    strict: boolean;
    sensitive: boolean;
    delimiter: string;
    decode: typeof decodeParam;
};
declare const _default: (customRoute?: boolean) => (path: string) => (pathname: string | null | undefined, params?: any) => any;
export default _default;
declare function decodeParam(param: string): string;
