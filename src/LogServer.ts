/**
 * @class LogServer
 * @description This class helps to debug messages send to the server.
 */
class LogServer {
	
	private settings: any = {
		endPoint: '',
		method: 'POST',
		headers: {},
		body: {}
	}

	constructor(serverSettings: any) {
		this.settings = { ...serverSettings }
	}

	protected sendToLogServer(sendBody?: any) {
		const endPoint = this.settings.endPoint
		const headers = this.settings.headers
		const body = this.settings.body
		const method = this.settings.method

		fetch(endPoint, {
			method: method,
			headers: {
				...headers
			},
			body: body
		})
	}
}