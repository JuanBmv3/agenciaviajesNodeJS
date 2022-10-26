import express from 'express';
import {paginaInicio, paginaTestimoniales, paginaViajes, paginaNosotros, paginaDetalleViaje} from '../controllers/paginasController.js';
import guardarTestimonial from '../controllers/testimonialController.js'


const router = express.Router();

router.get('/', paginaInicio);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/nosotros', paginaNosotros);





/* router.get('/nosotros',(req, res) => {
    const viajes = "Viaje a Alemania"
    /* res.render('nosotros',{
        viajes
    }); 
    res.render('nosotros');
})
*/



export default router;