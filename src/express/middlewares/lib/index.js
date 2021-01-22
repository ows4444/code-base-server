import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

export default function apply(app) {
  app.use(compression());
  app.use(helmet());
  app.use(cors());
  return app;
}
