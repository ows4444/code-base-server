import i18next from 'i18next'
import Backend from 'i18next-node-fs-backend'
import i18nextMiddleware from 'i18next-express-middleware'
i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: { loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json' },
    fallbackLng: 'en',
    preload: ['en'],
  })
export default function apply(app) {
  return app.use(i18nextMiddleware.handle(i18next))
}
