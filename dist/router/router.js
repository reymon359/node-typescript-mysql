"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = ` SELECT * FROM  heroes `;
    mysql_1.default.executeQuery(query, (err, heroes) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroes
            });
        }
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    // Escape the query value
    const escapedId = mysql_1.default.instance.cnn.escape(id);
    const query = ` SELECT * FROM  heroes     where id = ${escapedId}`;
    mysql_1.default.executeQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroe: heroe[0]
            });
        }
    });
});
// We can export the router this way or writing export before the declaration
exports.default = router;
