const sql = require('../db.js');

const Producto = function (producto) {
    this.Nombre = producto.nombre;
    this.Descripcion = producto.descripcion;
    this.Tipo = producto.tipo;
    this.Precio = producto.precio;
    this.id = producto.id;
}
Producto.createOne = function (nuevoProducto, resultado) {
    sql.query("INSERT INTO Productos SET ?", nuevoProducto, (err, sqlRes) => {
        if (err) {
            console.log(err);
            resultado(err, null);
        }
        console.log("Producto creado con exito", { id: sqlRes.insertId, ...nuevoProducto })
        resultado(null, { id: sqlRes.insertId, ...nuevoProducto });
    });
}
Producto.selectAll = function (resultado) {
    sql.query("SELECT * FROM Productos", (err, sqlRes) => {
        if (err) {
            resultado(err, null)
        }
        resultado(null, sqlRes)
    })
}

const values = [
    producto.nombre,
    producto.descripcion,
    producto.tipo,
    producto.precio,
    producto.id,
]
const updaterequest = `UPDATE Productos SET Nombre = ??, Descripcion = ??, Precio = ??, Tipo = ?? WHERE id = ??`
Producto.update = function (data, resultado) {
    sql.query(updaterequest, values, data, (err, sqlRes) => {
        if (err) {
            console.log(err);
            resultado(err, null);
        }
        console.log("Producto creado con exito", sqlRes)
        resultado(null, sqlRes);
    })
}
module.exports = Producto;