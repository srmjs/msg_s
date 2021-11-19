require('dotenv-safe').config({
    allowEmptyValues: true,
    ...(process.env.DOTENV_PATH) ? { path: process.env.DOTENV_PATH } : {},
});


module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT: {
        SECRET: process.env.JWT_SECRET
    },
    SECRET_ROUNDS: process.env.SECRET_ROUNDS
}