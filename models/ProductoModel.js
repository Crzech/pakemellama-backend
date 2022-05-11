const sql = require('../db.js');

const Producto = function (producto) { //definiendo una funcion llamada Producto
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
const updaterequest = `UPDATE Productos SET Nombre = ?, Descripcion = ?, Precio = ?, Tipo = ? WHERE id = ?`
Producto.update = function (data, callback) {
    sql.query(updaterequest, data, (sqlerr, sqlRes) => {
        if (sqlerr) {
            console.log(sqlerr);
            callback(sqlerr, null);
        }
        console.log("Producto creado con exito", sqlRes)
        callback(null, sqlRes);
    })
}
module.exports = Producto;