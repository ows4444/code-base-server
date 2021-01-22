import i18n from './i18n';
import lib from './lib';
import logger from './logger';

export default function middlewares(app) {
  app = i18n(app);
  app = lib(app);
  app = logger(app);
  return app;
}
