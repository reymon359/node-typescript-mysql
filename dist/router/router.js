"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    res.json({
        ok: true,
        message: 'All ok!'
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        message: 'All ok!',
        id: id
    });
});
// We can export the router this way or writing export before the declaration
exports.default = router;
