"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavigationEvents = void 0;
var useDialogNavigation_1 = require("./useDialogNavigation");
var useNavigationEvents = function () {
    var _a = (0, useDialogNavigation_1.useDialogNavigation)(), back = _a.back, close = _a.close;
    return {
        back: back,
        close: close,
    };
};
exports.useNavigationEvents = useNavigationEvents;
