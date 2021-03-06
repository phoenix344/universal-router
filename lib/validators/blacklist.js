"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const isUriValid_1 = require("../util/isUriValid");
function blacklist(list) {
    return {
        async validate(info) {
            const entry = list.find(domain => isUriValid_1.isUriValid(info, url_1.parse(domain)));
            if (entry !== undefined) {
                return false;
            }
        }
    };
}
exports.blacklist = blacklist;
//# sourceMappingURL=blacklist.js.map