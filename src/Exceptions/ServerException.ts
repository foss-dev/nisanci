/**
 * @description If the server config is wrong like endPoint, this exception will fire.
 * @class ServerException
 */
class ServerException extends Error {
	constructor(message) {
		super();
		this.message = message
		this.name = "ServerException"
	}
}

export default ServerException