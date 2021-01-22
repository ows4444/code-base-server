import morgan from 'morgan'
export default function apply(app) {
	app.use(morgan(process.env.NODE_ENV === 'production' ? 'tiny' : 'dev'))
	return app
}
