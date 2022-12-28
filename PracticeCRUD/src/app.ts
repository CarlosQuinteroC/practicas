/*
npm i express mongoose typescript @types/node nodemon
npm i --save-dev @types/express
npm run tsc -- --init
- Configurar outDir ./build
- configurar baseUrl ./src
*/
import fraganceController from './controllers/fraganceController';
import express from 'express';
import MongoService from './services/MongoService';

const app = express();

//Middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.send('PAge Upp');
});

app.use('/fragance', fraganceController)
//Start database
MongoService.connect();

export default app;