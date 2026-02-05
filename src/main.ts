import * as Sentry from '@sentry/node';
import app from './app';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'production',
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
