"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogTypes_1 = require("./LogTypes");
var LogServer_1 = require("./LogServer");
/**
 * @description Logger class. This class will have logging functions
 * @class Logger
 */
var Logger = /** @class */ (function () {
    function Logger(logConfig) {
        this.config = {
            useServer: false,
            endPoint: '',
            method: 'POST',
            headers: {},
            body: {}
        };
        this.config = logConfig;
        this.server = new LogServer_1.default(this.config.server);
    }
    /**
     * @description Send extra fields to the log backend
     * @function send
     * @param sendBody Extra body field
     * @example
     * 	loggerInstance.send({ pageUrl: 'test', 'time': '12:30' })
     */
    Logger.prototype.send = function (sendBody) {
        return this.server.sendToLogServer(sendBody);
    };
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
    /**
     * @description Runtime errors, for example when parseInt or toFixed errors work wrong
     * @function error
     * @param message any type of message
     * @param context Context will use to handle params. For example user IP address, username etc.
     * @example
     * 	loggerInstance.error('Error User', { username: 'John' })
     */
    Logger.prototype.error = function (message, context) {
        var logCode = LogTypes_1.default.ERROR;
        var levelName = LogTypes_1.Levels.GET(logCode);
        console.log(logCode, levelName);
    };
    /**
     * @description Components unavailable or unexpected exceptions
     * @function critical
     * @param message any type of message
     * @param context Context will use to handle params. For example user IP address, username etc.
     * @example
     * 	loggerInstance.critical('Critical message User', { username: 'John' })
     */
    Logger.prototype.critical = function (message, context) {
        var logCode = LogTypes_1.default.CRITICAL;
        var levelName = LogTypes_1.Levels.GET(logCode);
        console.log(logCode, levelName);
    };
    /**
     * @description Action must be taken immediately.
     * @function alert
     * @param message any type of message
     * @param context Context will use to handle params. For example user IP address, username etc.
     * @example
     * 	loggerInstance.alert('Alert message User', { username: 'John' })
     */
    Logger.prototype.alert = function (message, context) {
        var logCode = LogTypes_1.default.ALERT;
        var levelName = LogTypes_1.Levels.GET(logCode);
        console.log(logCode, levelName);
    };
    /**
     * @description System is unusable
     * @function emergency
     * @param message any type of message
     * @param context Context will use to handle params. For example user IP address, username etc.
     * @example
     * 	loggerInstance.emergency('Emergency message User', { username: 'John' })
     */
    Logger.prototype.emergency = function (message, context) {
        var logCode = LogTypes_1.default.EMERGENCY;
        var levelName = LogTypes_1.Levels.GET(logCode);
        console.log(logCode, levelName);
    };
    return Logger;
}());
exports.default = Logger;
