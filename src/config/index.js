import dotenv from 'dotenv'
process.env.NODE_ENV ? dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) : dotenv.config()

const config = {
	port: fillOrKill('PORT'),
	logs: {
		level: fillOrKill('LOG_LEVEL'),
	},
}

function fillOrKill(env) {
	if (process.env[env]) return process.env[env]
	else {
		const fileName = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
		// eslint-disable-next-line no-console
		console.error(`env "${env}" Not Found!!! in "${fileName}"`)
		process.exit(1)
	}
}
export default config
