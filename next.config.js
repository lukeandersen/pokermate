const Dotenv = require('dotenv-webpack')

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Add the new plugin to the existing webpack plugins
        config.plugins.push(new Dotenv({ silent: true }))
        return config
    },
    env: {
        FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
        FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
        FIREBASE_DATABASEURL: process.env.FIREBASE_DATABASEURL,
        FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
        FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
        FIREBASE_MESSAGINGSENDERID: process.env.FIREBASE_MESSAGINGSENDERID,
        FIREBASE_APPID: process.env.FIREBASE_APPID,
        FIREBASE_MEASUREMENTID: process.env.FIREBASE_MEASUREMENTID,
    },
}
