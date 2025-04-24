"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    if (!req.query.q) {
        return res.redirect('/');
    }
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        list: pet_1.Pet.getFromName(req.query.q)
    });
};
exports.search = search;
