import app from './frameworks/express'
import config from './config'
import Logger from './log'

function startServer() {
	app
		.listen(config.port, () => Logger.info(`Server listening on port:${config.port}`))
		.on('error', (err) => {
			Logger.error(err)
			process.exit(1)
		})
}

startServer()
