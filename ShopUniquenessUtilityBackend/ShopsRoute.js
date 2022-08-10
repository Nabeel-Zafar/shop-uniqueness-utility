const express = require('express');
const app = express();
const ShopsRoute = express.Router();

// Shops model
let Shops = require('./ShopsModel');

ShopsRoute.route('/getAllShops').get((req, res) => {
    Shops.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = ShopsRoute;