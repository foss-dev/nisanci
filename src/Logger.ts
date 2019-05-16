import LogTypes, { Levels } from './LogTypes'
import LogServer from './LogServer'
import Colors from './Colors'

// inspired by: https://stackify.com/php-monolog-tutorial/

/**
 * @description Logger class. This class will have logging functions
 * @class Logger
 */
class Logger {

	private isFormatted: boolean
	private formattedString: string
	
	/**
	 * Singleton instance
	 */
	private instance: Logger

	private config: any = {
		platform: 'web',
		server: {
			useServer: false,
			endPoint: '',
			method: 'POST',
			headers: {},
			body: {}
		}
	}

	private server: LogServer

	constructor(logConfig?: any) {
		this.config = logConfig

		this.server = new LogServer(this.config.server)

		if (!this.instance) {
			this.instance = this
		}

		return this.instance

	}

	/**
	 * @description This helps to get date with time
	 * @function getDateWithTime
	 * @example this.getDateWithTime() // output: 2019-05-16 12:03:48
	 */
	private getDateWithTime() {
		const date = (new Date()).toISOString().split('T')[0]
		const time = (new Date()).toISOString().split('T')[1].slice(0, 8)

		return `${date} ${time}`
	}

	/**
	 * @description This method will help to customize log messages.
	 * @param formatStr - The string which will formatted
	 * @function setFormat
	 * @todo
	 */
	public setFormat(formatStr: string) {
		this.isFormatted = true
	}

	/**
	 * @description This method helps to prepare output message
	 * @param details - An object
	 * @function setMessage
	 * @example
	 * 
	 * 		const messageData = {
	 * 			foregroundColor: colors.FgWhite,
	 * 			backgroundColor: colors.BgRed,
	 * 			levelName: levelName,
	 * 			message: message,
	 * 			reset: colors.Reset
	 * 		}
	 */
	private setMessage(details: any) {
		const logDate = this.getDateWithTime()

		let logString = `[${logDate}] - ${details.foregroundColor}${details.backgroundColor} ${details.levelName} ${details.reset} - `

		logString += `${details.message}`
		
		logString = logString.trim()

		return logString
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
		const colors = this.config.platform == "web" ? Colors["Web"] : Colors["Node"]
		
		const messageData = {
			foregroundColor: colors.FgWhite,
			backgroundColor: colors.BgRed,
			levelName: levelName,
			message: message,
			reset: colors.Reset
		}

		const messageOutput = this.setMessage(messageData)

		console.log(messageOutput)
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