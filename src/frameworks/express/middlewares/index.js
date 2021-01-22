import i18n from './i18n'
import lib from './lib'
import logger from './logger'
export default (app) => [i18n, lib, logger].reduce((app, middleware) => middleware(app), app)
