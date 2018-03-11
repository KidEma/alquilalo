// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// Properties
const Property = require('./models/Property');

// Users
const User = require('./models/User');

// Leases
const Lease = require('./models/Lease');

// LeaseInstalment
const LeaseInstalment = require('./models/LeaseInstalment');

// Addresses
const Address = require('./models/Address');

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function (app, config) {
    // Authentication middleware
    const jwtCheck = jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
        }),
        audience: config.AUTH0_API_AUDIENCE,
        issuer: `https://${config.AUTH0_DOMAIN}/`,
        algorithm: 'RS256'
    });

    // Check for an authenticated admin user
    const adminCheck = (req, res, next) => {
        const roles = req.user[config.NAMESPACE] || [];
        if (roles.indexOf('admin') > -1) {
            next();
        } else {
            res.status(401).send({ message: 'Not authorized for admin access' });
        }
    }

    /*
     |--------------------------------------
     | API Routes
     |--------------------------------------
     */

    // GET API root
    app.get('/alquilalo/', (req, res) => {
        res.send('API works');
    });



    //   // GET list of properties by user - no login required - public access query
    //   app.get('/alquilalo/properties/:administratorId', (req, res) => {
    //     Property.find({administratorsId: req.params.administratorId }, _eventListProjection, (err, events) => {
    //       let propertiesArr = [];
    //       if (err) {
    //         return res.status(500).send({message: err.message});
    //       }
    //       if (properties) {
    //         properties.forEach(property => {
    //             propertiesArr.push(property);
    //         });
    //       }
    //       res.send(propertiesArr);
    //     });
    //   });


    const _propertiesListProjection = 'title type description price photoThumb';
    
    // GET list of all properties (admin only)
    app.get('/alquilalo/properties/admin', jwtCheck, adminCheck, (req, res) => {
        Property.find({}, _propertiesListProjection, (err, properties) => {
            let propertiesArr = [];
            if (err) {
                return res.status(500).send({ message: err.message });
            }
            if (properties) {
                properties.forEach(property => {
                    propertiesArr.push(property);
                });
            } 
            res.send(propertiesArr);
        });
    });


    // GET property by property ID (User only)
    app.get('/alquilalo/property/:id', jwtCheck, (req, res) => {
        Property.findById(req.params.id, (err, property) => {
            if (err) {
                return res.status(500).send({ message: err.message });
            }
            if (!property) {
                return res.status(400).send({ message: 'Property not found.' });
            }
            res.send(property);
        });
    });


};