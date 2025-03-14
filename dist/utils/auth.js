"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeNavLinksToShow = exports.computeUserRole = void 0;
const configs_1 = require("../configs");
const computeUserRole = (auth) => {
    if (auth.token && auth.role === "ROLE_ADMIN") {
        return "admin";
    }
    else if (auth.token) {
        return "user";
    }
    else {
        return "guest";
    }
};
exports.computeUserRole = computeUserRole;
const computeNavLinksToShow = (auth) => {
    const userType = (0, exports.computeUserRole)(auth);
    return configs_1.NAV_LINKS.filter((link) => {
        if (userType === "admin") {
            return ["protected", "authenticated", "public"].includes(link.visibility);
        }
        else if (userType === "user") {
            return ["authenticated", "public", "exclusive"].includes(link.visibility);
        }
        else if (userType === "guest") {
            return ["public", "unauthenticated"].includes(link.visibility);
        }
        return false;
    });
};
exports.computeNavLinksToShow = computeNavLinksToShow;
//# sourceMappingURL=auth.js.map