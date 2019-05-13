"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Log Levels are explained by RFC 5424
 * @see https://tools.ietf.org/html/rfc5424
 * @enum LogTypes
 */
var LogTypes;
(function (LogTypes) {
    /**
     * @description System is unusable
     * @type {integer}
     */
    LogTypes[LogTypes["EMERGENCY"] = 600] = "EMERGENCY";
    /**
     * @description Action must be taken immediately.
     * * Example: Server returned 500, browser doesn't support function etc. This should trigger backend alerts.
     * @type {integer}
     */
    LogTypes[LogTypes["ALERT"] = 550] = "ALERT";
    /**
     * @description Critical conditions
     * * Example: Components unavailable or unexpected exceptions
     * @type {integer}
     */
    LogTypes[LogTypes["CRITICAL"] = 500] = "CRITICAL";
    /**
    * @description Error conditions
    * * Example: Runtime errors, for example when parseInt or toFixed errors work wrong
    * @type {integer}
    */
    LogTypes[LogTypes["ERROR"] = 400] = "ERROR";
    /**
     * @description Warning conditions
     * * Example: You can use to show deprecated messages, old API or functions
     * @type {integer}
     */
    LogTypes[LogTypes["WARNING"] = 300] = "WARNING";
    /**
     * @description Normal but significant condition
     * * Example: Normal but significant events
     * @type {integer}
     */
    LogTypes[LogTypes["NOTICE"] = 250] = "NOTICE";
    /**
     * @description Informational messages
     * * Example: Interesting behavioral events. For example, event firing, dom changing etc.
     * @type {integer}
     */
    LogTypes[LogTypes["INFO"] = 200] = "INFO";
    /**
     * @description Debug-level messages
     * * Example: Detailed debug information
     * @type {integer}
     */
    LogTypes[LogTypes["DEBUG"] = 100] = "DEBUG";
})(LogTypes || (LogTypes = {}));
var Levels = /** @class */ (function () {
    function Levels() {
    }
    Levels.GET = function (logType) {
        switch (logType) {
            case 100:
                return "DEBUG";
                break;
            case 200:
                return "INFO";
                break;
            case 250:
                return "NOTICE";
                break;
            case 300:
                return "WARNING";
                break;
            case 400:
                return "ERROR";
                break;
            case 500:
                return "CRITICAL";
                break;
            case 550:
                return "ALERT";
                break;
            case 600:
                return "EMERGENCY";
                break;
            default:
                break;
        }
    };
    return Levels;
}());
exports.Levels = Levels;
exports.default = LogTypes;
