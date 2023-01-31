"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.findAll();
    res.json({
        ok: true,
        users
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield userModel_1.default.findByPk(id);
    if (user) {
        res.json({
            ok: true,
            id,
            user
        });
    }
    else {
        res.status(404).json({
            ok: false,
            msg: 'No existe ningun usuario por este ID'
        });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = yield userModel_1.default.create(body);
        res.json({
            ok: true,
            body,
            msg: 'User Create!',
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'comuniquese con el admin'
        });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield userModel_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: ' No Encontro ningun usuario con ese id '
            });
        }
        yield user.update(body);
        res.json({
            ok: true,
            id,
            msg: 'user Update with succesful',
            user
        });
    }
    catch (error) {
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield userModel_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: ' No Encontro ningun usuario con ese id '
            });
        }
        // eliminación permanente
        //await user.destroy();
        yield user.update({ state: false });
        res.json({
            ok: true,
            id,
            msg: 'user has been deleted ',
            user
        });
    }
    catch (error) {
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map