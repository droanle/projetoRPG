
const connectionSettings = {
    HOSTNAME: process.env.MONGO_HOSTNAME,
    USERNAME: process.env.MONGO_USERNAME,
    PASSWORD: process.env.MONGO_PASSWORD,
    PORT: process.env.MONGO_PORT,
    DB: process.env.MONGO_DB
};

module.exports = connectionSettings;