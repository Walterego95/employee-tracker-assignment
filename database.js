const mysql = require('mysql2/promise');

const dotenv = require('dotenv');
dotenv.config();
const {host, user, password, database, port} = process.env;

module.exports = class Database {
    connection_config = null;

    constructor() {
        this.connection_config = {
            host: host,
            user: user,
            password: password,
            database: database,
            port: port
        }
    }

    openDb() {
        return new Promise((resolve, reject) => {
            mysql.createConnection(this.connection_config).then(connection => {
                resolve(connection);
            }).catch(error => reject(error));
        });
    }

    closeDb(connection) {
        return new Promise((resolve, reject) => {
            connection.end().then(response => {
                resolve(response);
            }).catch(error => reject(error));
        });  
    }

    runQuery(query) {
        return new Promise((resolve, reject) => {
            this.openDb().then(connection => {
                connection.query(query).then(([rows, fields]) => {
                    this.closeDb(connection).then(() => {
                        resolve(rows);
                    }).catch(error => reject(error));            
                }).catch(error => reject(error));            
            }).catch(error => reject(error));
        });
    }
}
