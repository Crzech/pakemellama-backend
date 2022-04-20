const sql = require('../db.js');

const Producto = function(producto) {
    this.Nombre = producto.nombre;
    this.Descripcion = producto.descripcion;
    this.Tipo = producto.tipo;
    this.Precio = producto.precio;
}

Producto.createOne = function(nuevoProducto, resultado) {
    sql.query("INSERT INTO Productos SET ?", nuevoProducto, (err, sqlRes) => {
       if (err) {
          console.log(err);
          resultado(err, null); 
       }
       console.log("Producto creado con exito", { id: sqlRes.insertId, ...nuevoProducto })
       resultado(null, { id: sqlRes.insertId, ...nuevoProducto });
   });
}

module.exports = Producto;