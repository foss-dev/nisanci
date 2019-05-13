"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogTypes_1 = require("./LogTypes");
/**
 * @description Logger class. This class will have logging functions
 * @class Logger
 */
var Logger = /** @class */ (function () {
    function Logger(logConfig) {
        this.config = {
            server: {}
        };
        this.config = logConfig;
    }
    /**
     * @description Debug Level Message
     * @function debug
     * @param message any type of message
     * @param context Context will use to handle params. For example user IP address, username etc.
     * @example
     * 	loggerInstance.debug('Debug User', { username: 'John' })
     */
    Logger.prototype.debug = function (message, context) {
        var logCode = LogTypes_1.default.DEBUG;
        var levelName = LogTypes_1.Levels.GET(logCode);
        console.log(logCode, levelName);
    };
    /**
     * @description Informational messages
     * @function info
     * @param message any type of message
     * @param context Context will use to handle params. For example user IP address, username etc.
     * @example
     * 	loggerInstance.info('Info User', { username: 'John' })
     */
    Logger.prototype.info = function (message, context) {
        var logCode = LogTypes_1.default.INFO;
        var levelName = LogTypes_1.Levels.GET(logCode);
        console.log(logCode, levelName);
    };
    /**
     * @description Normal but significant condition
     * @function notice
     * @param message any type of message
     * @param context Context will use to handle params. For example user IP address, username etc.
     * @example
     * 	loggerInstance.notice('Notice User', { username: 'John' })
     */
    Logger.prototype.notice = function (message, context) {
        var logCode = LogTypes_1.default.NOTICE;
        var levelName = LogTypes_1.Levels.GET(logCode);
        console.log(logCode, levelName);
    };
    /**
     * @description You can use to show deprecated messages, old API or functions
     * @function warning
     * @param message any type of message
     * @param context Context will use to handle params. For example user IP address, username etc.
     * @example
     * 	loggerInstance.warning('Warning User', { username: 'John' })
     */
    Logger.prototype.warning = function (message, context) {
        var logCode = LogTypes_1.default.WARNING;
        var levelName = LogTypes_1.Levels.GET(logCode);
        console.log(logCode, levelName);
    };
    return Logger;
}());
exports.default = Logger;
