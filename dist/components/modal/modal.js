"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const Modal = ({ children, handleClose = () => { } }) => {
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed z-40 w-full h-full flex justify-center items-center inset-0 backdrop-blur-md backdrop-brightness-50" }, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ initial: "hidden", animate: "visible", exit: "exit", variants: dropIn, className: "rounded-[30px] z-50 w-full mx-auto" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "bg-white w-[90%] md:w-3/5 mx-auto p-3 max-h-[800px] overflow-y-auto border rounded-md" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex items-center justify-end" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => handleClose() }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/close.svg", alt: "close" }, void 0) }), void 0) }), void 0), children && children] }), void 0) }), void 0) }), void 0));
};
exports.Modal = Modal;
const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};
//# sourceMappingURL=modal.js.map