"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ServerException_1 = require("./Exceptions/ServerException");
/**
 * @class LogServer
 * @description This class helps to debug messages send to the server.
 */
var LogServer = /** @class */ (function () {
    /**
     *
     * @param serverSettings Log backend settings as a parameter
     */
    function LogServer(serverSettings) {
        /**
         * Log Backend Settings
         */
        this.settings = {
            useServer: false,
            endPoint: '',
            method: 'POST',
            headers: {},
            body: {}
        };
        this.settings = __assign({}, serverSettings);
        if (this.settings.useServer) {
            if (!this.settings.endPoint) {
                throw new ServerException_1.default("Endpoint must be defined!");
            }
        }
    }
    /**
     * @description private function to send data to log backend
     * @function sendToServer
     * @param sendBody
     */
    LogServer.prototype.sendToServer = function (sendBody) {
        var endPoint = this.settings.endPoint;
        var headers = this.settings.headers;
        var body = this.settings.body;
        var method = this.settings.method;
        return fetch(endPoint, {
            method: method,
            headers: __assign({}, headers),
            body: JSON.stringify(__assign({}, body, sendBody))
        });
    };
    /**
     * @description public function to send data to log backend. If useServer flag is not true, data will not send to the server.
     * @function sendToLogServer
     * @param sendBody
     */
    LogServer.prototype.sendToLogServer = function (sendBody) {
        if (this.settings.useServer) {
            this.sendToServer(sendBody);
        }
    };
    return LogServer;
}());
exports.default = LogServer;
