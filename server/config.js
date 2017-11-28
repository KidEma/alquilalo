// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'alquilalo.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'alquilalo', // e.g., 'http://localhost:8083/api/'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://ema-admin:ema123alquilalo@ds115396.mlab.com:15396/alquilalo-core',
    NAMESPACE: 'http://myapp.com/roles'
  };