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
    Producto.nombre,
    Producto.descripcion,
    Producto.tipo,
    Producto.precio,
    Producto.id,
]
const updaterequest = `UPDATE Productos SET Nombre = ?, Descripcion = ?, Precio = ?, Tipo = ? WHERE id = ?`
Producto.update = function (resultado) {
    sql.query(updaterequest, values, function (err, sqlRes) {
        if (err) {
            console.log(err);
            resultado(err, null);
        }
        console.log("Producto creado con exito", sqlRes)
        resultado(null, sqlRes);
    })
}
module.exports = Producto;