import { SocksProxyInfo } from "./SocksProxyInfo";
export interface SocksRouteValidator {
    (info: SocksProxyInfo): Promise<boolean | void>;
}
//# sourceMappingURL=Validator.d.ts.map