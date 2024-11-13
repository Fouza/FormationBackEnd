import { Router } from "express";
import users from "./users.js";
import products from "./products.js";
import test from "./test.js";
import orders from "./orders.js";
import auth from "./auth.js";

export default () => {
    let api = Router();

    api.use('/users', users())

    api.use('/products', products())

    api.use('/orders', orders())

    api.use('/auth', auth())

    api.use('/test', test())

    return api
}