import ServerException from "./Exceptions/ServerException";

/**
 * @class LogServer
 * @description This class helps to debug messages send to the server.
 */
class LogServer {
	
	/**
	 * Log Backend Settings
	 */
	private settings: any = {
		useServer: false,
		endPoint: '',
		method: 'POST',
		headers: {},
		body: {}
	}

	/**
	 * 
	 * @param serverSettings Log backend settings as a parameter
	 */
	constructor(serverSettings: any) {
		this.settings = { ...serverSettings }

		if (this.settings.useServer) {
			if (!this.settings.endPoint) {
				throw new ServerException("Endpoint must be defined!");
			}
		}
	}

	/**
	 * @description private function to send data to log backend
	 * @function sendToServer
	 * @param sendBody
	 */
	private sendToServer(sendBody?: any) {
		const endPoint = this.settings.endPoint
		const headers = this.settings.headers
		const body = this.settings.body
		const method = this.settings.method

		return fetch(endPoint, {
			method: method,
			headers: {
				...headers
			},
			body: JSON.stringify({
				...body,
				...sendBody
			})
		})
	}

	/**
	 * @description public function to send data to log backend. If useServer flag is not true, data will not send to the server.
	 * @function sendToLogServer
	 * @param sendBody
	 */
	public sendToLogServer(sendBody?: any) {
		if (this.settings.useServer) {
			this.sendToServer(sendBody)
		}
	}
}

export default LogServer