import LogTypes, { Levels } from './LogTypes'
import LogServer from './LogServer'
import Colors from './Colors'

/**
 * @description Logger class. This class will have logging functions
 * @class Logger
 */
class Logger {

	private isFormatted: boolean
	private formattedString: string

	private config: any = {
		useServer: false,
		endPoint: '',
		method: 'POST',
		headers: {},
		body: {}
	}

	private server: LogServer

	constructor(logConfig?: any) {
		this.config = logConfig

		this.server = new LogServer(this.config.server)

	}

	public setFormat(formatStr: string) {
		this.isFormatted = true
	}

	/**
	 * @description Debug Level Message
	 * @function debug
	 * @param message - any type of message
	 * @param context - Context will use to handle params. For example user IP address, username etc.
	 * @example 
	 * 	loggerInstance.debug('Debug User', { username: 'John' })
	 */
	debug(message: string, context: any) {
		const logCode = LogTypes.DEBUG
		const levelName = Levels.GET(logCode)
		const colors = Colors.Node //Colors.GET('node')
		

		/**
		 * @todo This section will change. This needs formatted output
		 */
		console.log(logCode, levelName)
		console.log(`${colors.FgWhite}${colors.BgRed}%s`, `${levelName}`, colors.Reset, '-', message);
	}
	
	/**
	 * @description Informational messages
	 * @function info
	 * @param message - any type of message
	 * @param context - Context will use to handle params. For example user IP address, username etc.
	 * @example
	 * 	loggerInstance.info('Info User', { username: 'John' })
	 */
	info(message: string, context: any) {
		const logCode = LogTypes.INFO
		const levelName = Levels.GET(logCode)

		console.log(logCode, levelName)

	}
	
	/**
	 * @description Normal but significant condition
	 * @function notice
	 * @param message - any type of message
	 * @param context - Context will use to handle params. For example user IP address, username etc.
	 * @example
	 * 	loggerInstance.notice('Notice User', { username: 'John' })
	 */
	notice(message: string, context: any) {
		const logCode = LogTypes.NOTICE
		const levelName = Levels.GET(logCode)

		console.log(logCode, levelName)

	}

	/**
	 * @description You can use to show deprecated messages, old API or functions
	 * @function warning
	 * @param message - any type of message
	 * @param context - Context will use to handle params. For example user IP address, username etc.
	 * @example
	 * 	loggerInstance.warning('Warning User', { username: 'John' })
	 */
	warning(message: string, context: any) {
		const logCode = LogTypes.WARNING
		const levelName = Levels.GET(logCode)

		console.log(logCode, levelName)

	}
	
	/**
	 * @description Runtime errors, for example when parseInt or toFixed errors work wrong
	 * @function error
	 * @param message - any type of message
	 * @param context - Context will use to handle params. For example user IP address, username etc.
	 * @example
	 * 	loggerInstance.error('Error User', { username: 'John' })
	 */
	error(message: string, context: any) {
		const logCode = LogTypes.ERROR
		const levelName = Levels.GET(logCode)

		console.log(logCode, levelName)

	}
	
	/**
	 * @description Components unavailable or unexpected exceptions
	 * @function critical
	 * @param message - any type of message
	 * @param context - Context will use to handle params. For example user IP address, username etc.
	 * @example
	 * 	loggerInstance.critical('Critical message User', { username: 'John' })
	 */
	critical(message: string, context: any) {
		const logCode = LogTypes.CRITICAL
		const levelName = Levels.GET(logCode)

		console.log(logCode, levelName)

	}
	
	/**
	 * @description Action must be taken immediately. 
	 * @function alert
	 * @param message - any type of message
	 * @param context - Context will use to handle params. For example user IP address, username etc.
	 * @example
	 * 	loggerInstance.alert('Alert message User', { username: 'John' })
	 */
	alert(message: string, context: any) {
		const logCode = LogTypes.ALERT
		const levelName = Levels.GET(logCode)

		console.log(logCode, levelName)

	}
	
	/**
	 * @description System is unusable
	 * @function emergency
	 * @param message - any type of message
	 * @param context - Context will use to handle params. For example user IP address, username etc.
	 * @example
	 * 	loggerInstance.emergency('Emergency message User', { username: 'John' })
	 */
	emergency(message: string, context: any) {
		const logCode = LogTypes.EMERGENCY
		const levelName = Levels.GET(logCode)

		console.log(logCode, levelName)

	}
}



export default Logger