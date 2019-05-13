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
/**
 * @class LogServer
 * @description This class helps to debug messages send to the server.
 */
var LogServer = /** @class */ (function () {
    function LogServer(serverSettings) {
        this.settings = {
            endPoint: '',
            method: 'POST',
            headers: {},
            body: {}
        };
        this.settings = __assign({}, serverSettings);
    }
    LogServer.prototype.sendToLogServer = function (sendBody) {
        var endPoint = this.settings.endPoint;
        var headers = this.settings.headers;
        var body = this.settings.body;
        var method = this.settings.method;
        fetch(endPoint, {
            method: method,
            headers: __assign({}, headers),
            body: body
        });
    };
    return LogServer;
}());
