"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.convertToQueryParams = exports.removeEmptyNullUndefined = exports.getInitials = exports.truncateString = void 0;
const truncateString = (str, maxLength = 10) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + "...";
    }
    return str;
};
exports.truncateString = truncateString;
const getInitials = (fullName) => {
    return fullName
        .split(" ")
        .map((name) => name.charAt(0).toUpperCase())
        .join("");
};
exports.getInitials = getInitials;
const removeEmptyNullUndefined = (obj) => Object.entries(obj)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, v]) => v != null && v != undefined && v != "")
    .reduce((acc, [k, v]) => (Object.assign(Object.assign({}, acc), { [k]: v })), {});
exports.removeEmptyNullUndefined = removeEmptyNullUndefined;
const convertToQueryParams = (obj) => {
    const query = "?" + new URLSearchParams((0, exports.removeEmptyNullUndefined)(obj)).toString();
    return query;
};
exports.convertToQueryParams = convertToQueryParams;
const capitalize = (sentence) => {
    return sentence
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};
exports.capitalize = capitalize;
//# sourceMappingURL=formatters.js.map