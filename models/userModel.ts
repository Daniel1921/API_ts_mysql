import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('users', {
    id_user: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    }
});


export default User;

