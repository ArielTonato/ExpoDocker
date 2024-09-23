import mysql from "mysql2/promise";

const config = {
    host:"localhost",
    user:"root",
    port:5432,
    password:"12345",
    database:"todo_list"
}
const connection = await mysql.createConnection(config);

export default connection;
