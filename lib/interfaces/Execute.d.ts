/// <reference types="node" />
import { SocksProxyInfo } from "./SocksProxyInfo";
import { Socket } from "net";
export interface SocksRouteInterceptor {
    (info: SocksProxyInfo, socket: Socket): Promise<void>;
}
//# sourceMappingURL=Execute.d.ts.map