const express = require('express');
const router = express.Router();


// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

// create 
router.post('/create', product_controller.product_create);
// check login
router.post('/login', product_controller.product_login);
//read ALL product
router.get('/read', product_controller.product_all);
// Get profil
router.get('/profile', product_controller.product_all);
//Logout
router.get('/logout', product_controller.product_logout);
//read by id
router.get('/read/:id', product_controller.product_details);
//update by id
router.put('/update/:id', product_controller.product_update);
//supprimer toute la table
router.delete('/delete', product_controller.product_delete);

module.exports = router;

