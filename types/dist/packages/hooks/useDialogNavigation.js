"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDialogNavigation = void 0;
var navigation_1 = require("@klapp/navigation");
var useDialogNavigation = function () {
    var close = useCallback(function () {
        return (0, navigation_1.close)(null);
    });
    var back = useCallback(function () {
        return (0, navigation_1.navigateBack)(null);
    });
    return { back: back, close: close };
};
exports.useDialogNavigation = useDialogNavigation;
