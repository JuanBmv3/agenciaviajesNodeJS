import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//Conectar a la base de datos de
db.authenticate()
    .then(() => console.log('Base de datos conectada') )
    .catch(error => console.log(error));


//PUERTO
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug');

app.use((req, res, next) =>{
    const year = new Date();
    res.locals.yearLocal = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes"
    return next();
})


//Definir la carpeta publica
app.use(express.static('public'));

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }))


//Agregamos router
app.use('/', router);

app.listen(port, ()=> {
    console.log(`El servidor esta listo ${port}`);
})