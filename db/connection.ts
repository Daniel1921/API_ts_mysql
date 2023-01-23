import {Sequelize} from 'sequelize';

const db = new Sequelize('test', 'root', '123456789', {
    host: "localhost",
    dialect: 'mysql'
});

export default db;


