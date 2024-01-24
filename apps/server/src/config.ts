import path from 'path';

import dotenvSafe from 'dotenv-safe';

const cwd = process.cwd();

const root = path.join.bind(cwd);

console.log(cwd)

dotenvSafe.config({
    path: root('.env'),
    sample: root('.env.example'),
});

const ENV = process.env;

const config = {
    PORT: ENV.PORT ?? 4000,
    MONGO_URI: ENV.MONGO_URI ?? '',
    MONGO_URI_TEST: ENV.MONGO_URI_TEST ?? '',
};

export { config };
