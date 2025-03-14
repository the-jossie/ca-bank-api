"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_template_literals_1 = __importDefault(require("@netlify/classnames-template-literals"));
const react_1 = require("react");
const label_1 = require("./label");
const SearchInput = ({ label = "", text, setText, placeholder = "Search...", handleSearch, wrapperStyle, }) => {
    const hasCustomSearch = !!handleSearch;
    const DELAY_IN_MS = 1000;
    const [isTouched, setIsTouched] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (hasCustomSearch && isTouched) {
            const searchTimeout = setTimeout(() => {
                handleSearch();
            }, DELAY_IN_MS);
            return () => clearTimeout(searchTimeout);
        }
    }, [text, isTouched, hasCustomSearch, handleSearch]);
    const handleChange = (e) => {
        setText(e.currentTarget.value);
        setIsTouched(true);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `flex-1 ${wrapperStyle}` }, { children: [(0, jsx_runtime_1.jsx)(label_1.Label, { text: label, htmlFor: "search-input" }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: inputBackground }, { children: (0, jsx_runtime_1.jsx)("input", { id: "search-input", className: inputStyle, placeholder: placeholder, value: text, onChange: handleChange }, void 0) }), void 0)] }), void 0));
};
exports.SearchInput = SearchInput;
const inputBackground = (0, classnames_template_literals_1.default)(`
  bg-grey-500 flex rounded-full px-4 items-center flex-1 border transition-colors duration-300 focus-within:border-primary
`);
const inputStyle = (0, classnames_template_literals_1.default)(`
  bg-transparent py-3 flex-1 outline-none font-[16px] leading-0 text-sm
`);
//# sourceMappingURL=search-input.js.map