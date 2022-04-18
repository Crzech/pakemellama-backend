module.exports = app => {
    const productos = require('../controllers/ProductoController.js');
    const router = require('express').Router();

    router.post("/", productos.create);

    app.use('/api/productos', router);
};