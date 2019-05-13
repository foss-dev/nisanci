/**
 * @description Log Levels are explained by RFC 5424
 * @see https://tools.ietf.org/html/rfc5424
 * @enum LogTypes
 */
enum LogTypes {

	/**
	 * @description System is unusable
	 * @type {integer}
	 */
	EMERGENCY = 600,

	/**
	 * @description Action must be taken immediately. 
	 * * Example: Server returned 500, browser doesn't support function etc. This should trigger backend alerts.
	 * @type {integer}
	 */
	ALERT = 550,

	/**
	 * @description Critical conditions
	 * * Example: Components unavailable or unexpected exceptions
	 * @type {integer}
	 */
	CRITICAL = 500,

	 /**
	 * @description Error conditions
	 * * Example: Runtime errors, for example when parseInt or toFixed errors work wrong
	 * @type {integer}
	 */
	ERROR = 400,

	/**
	 * @description Warning conditions
	 * * Example: You can use to show deprecated messages, old API or functions
	 * @type {integer}
	 */
	WARNING = 300,

	/**
	 * @description Normal but significant condition
	 * * Example: Normal but significant events
	 * @type {integer}
	 */
	NOTICE = 250,

	/**
	 * @description Informational messages
	 * * Example: Interesting behavioral events. For example, event firing, dom changing etc.
	 * @type {integer}
	 */
	INFO = 200,

	/**
	 * @description Debug-level messages
	 * * Example: Detailed debug information
	 * @type {integer}
	 */
	DEBUG = 100,
}

class Levels {
	public static GET(logType: LogTypes): string {
		switch (logType) {
			case 100:
				return "DEBUG"
				break;
			case 200:
				return "INFO"
				break;
			case 250:
				return "NOTICE"
				break;
			case 300:
				return "WARNING"
				break;
			case 400:
				return "ERROR"
				break;
			case 500:
				return "CRITICAL"
				break;
			case 550:
				return "ALERT"
				break;
			case 600:
				return "EMERGENCY"
				break;
			default:
				break;
		}
	}
}

export {
	Levels
}
export default LogTypes;