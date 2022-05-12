const express = require ('express');
const controller = require ('../controller/controller');
const services = require('../services/render');
const route = express.Router()

/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/', services.homeRoutes);

/**
 *  @description add product
 *  @method GET /add_product
 */
route.get('/add_product', services.add_product);
/**
 *  @description add product
 *  @method GET /add_product
 */
 route.get('/update_product', services.update_product);
 /**
  * Cart list
  */
 route.get('/cart', services.cart);

// API
route.post('/api/products', controller.create);
route.get('/api/products', controller.find);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);
module.exports=route;