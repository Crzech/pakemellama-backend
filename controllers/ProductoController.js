const Producto = require("../models/ProductoModel.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "El contenido de la petición no puede estar vacío"
        });
        return;
    }

    const { nombre, descripcion, tipo, precio, } = req.body;
    const producto = new Producto({
        nombre,
        descripcion,
        tipo,
        precio,
    });
    Producto.createOne(producto, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Algun error interno ha sucedido al crear el producto"
            });
        } else {
            res.status(201).send({ message: "Producto creado exitosamente", data })
        }
    })
};
exports.selectAll = (req, res) => {
    Producto.selectAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            })
        } else {
            res.status(200).send({
                message: "Informacion enviada correctamente", data
            })
        }
    })
}

