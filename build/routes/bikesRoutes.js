"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bikesController_1 = __importDefault(require("../controllers/bikesController"));
var BikesRoutes = /** @class */ (function () {
    function BikesRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    BikesRoutes.prototype.config = function () {
        this.router.get('/', bikesController_1.default.list);
        this.router.get('/:id', bikesController_1.default.getOne);
        this.router.post('/', bikesController_1.default.create);
        this.router.delete('/:id', bikesController_1.default.delete);
        this.router.put('/:id', bikesController_1.default.update);
    };
    return BikesRoutes;
}());
var bikesRoutes = new BikesRoutes();
exports.default = bikesRoutes.router;
