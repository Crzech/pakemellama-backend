const sql = require('../db.js');

const Producto = function (producto) {
    this.Nombre = producto.nombre;
    this.Descripcion = producto.descripcion;
    this.Precio = producto.precio;
    this.Tipo = producto.tipo;
    this.id = producto.id;
}
Producto.createOne = function (nuevoProducto, resultado) {
    sql.query("INSERT INTO Productos SET ?", nuevoProducto, (err, sqlRes, _) => {
        if (err) {
            console.log(err);
            resultado(err, null);
        }
        console.log(sqlRes.insertId);
        resultado(null, { ...nuevoProducto, id: sqlRes.insertId, });
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
    sql.query(updaterequest, data, (sqlerr, sqlRes, _) => {
        if (sqlerr) {
            console.log(sqlerr);
            callback(sqlerr, null);
        }
        console.log(sqlRes.id)
        callback(null, { id: sqlRes.insertId });
    })
}
Producto.delete = function (data, response) {
    console.log(data)
    sql.query(`DELETE FROM Productos WHERE id = ?`, data, (sqlerr, sqlres) => {
        if (sqlerr) {
            console.log(sqlerr)
            response(sqlerr, null);
        }
        console.log("Producto eliminado con exito", sqlres)
        response(null, sqlres)
    })
}
module.exports = Producto;