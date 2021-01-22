import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

export default (app) => [compression, helmet, cors].reduce((app, middleware) => app.use(middleware()), app)
