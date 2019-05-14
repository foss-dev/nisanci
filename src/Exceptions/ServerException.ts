class ServerException extends Error {
	constructor(message) {
		super();
		this.message = message
		this.name = "ServerException"
	}
}

export default ServerException