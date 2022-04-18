const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'mysqldb',
  user:  'root',
  password: 'root',
  database: 'pakemellama'
});
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;