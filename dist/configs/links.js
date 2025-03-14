"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAV_LINKS = void 0;
const routes_1 = require("./routes");
exports.NAV_LINKS = [
    {
        name: "Home",
        url: routes_1.PAGE_ROUTES.DASHBOARD,
        visibility: "public",
    },
    {
        name: "Login",
        url: routes_1.PAGE_ROUTES.LOGIN,
        visibility: "unauthenticated",
    },
    {
        name: "Sign Up",
        url: routes_1.PAGE_ROUTES.SIGNUP,
        visibility: "unauthenticated",
    },
];
//# sourceMappingURL=links.js.map