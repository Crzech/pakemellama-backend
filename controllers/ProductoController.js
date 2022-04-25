const Producto = require("../models/ProductoModel.js");
exports.selectAll = Producto.selectAll
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "El contenido de la petición no puede estar vacío"
        });
        return;
    }

    const { nombre, descripcion, tipo, precio } = req.body;
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
Producto.selectAll = function (resultado) {
    sql.query("SELECT * FROM Productos", null, (err, res) => {
        if (err) {
            console.log(err)
            resultado(err, null)
        }
        console.log("Informacion enviada con exito")
        resultado(null, res)
    })
}