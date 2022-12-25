"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
npm i express mongoose typescript @types/node nodemon
npm i --save-dev @types/express
npm run tsc -- --init
- Configurar outDir ./build
- configurar baseUrl ./src
*/
const express_1 = __importDefault(require("express"));
const MongoService_1 = __importDefault(require("./services/MongoService"));
const app = (0, express_1.default)();
//Middlewares 
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (request, response) => {
    response.send('PAge Upp');
});
//Start database
MongoService_1.default.connect();
exports.default = app;
