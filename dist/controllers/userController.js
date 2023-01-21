"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        ok: true,
        msg: 'get Users BD'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        id,
        msg: 'get a User BD'
    });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const { body } = req;
    res.json({
        ok: true,
        body,
        msg: 'User Create!'
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        ok: true,
        id,
        msg: 'user Update with succesful'
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        id,
        msg: 'user has been deleted '
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map