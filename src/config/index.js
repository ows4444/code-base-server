import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config = {
  port: '8089',
  logs: { level: 'silly' },
};

function fillOrKill(env) {
  if (process.env[env]) return process.env[env];
  else {
    console.log(`env "${env}" Not Found!!! in ".env.${process.env.NODE_ENV}"`);
    process.exit(1);
  }
}
export default config;
