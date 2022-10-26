import {Testimonial} from '../models/Testimoniales.js';


const guardarTestimonial = async (req, res) => {
    
    const {nombre, correo, mensaje} = req.body;
   
    if(!validar(req.body)){
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            titulo: 'Testimoniales',
            errores: true,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        try {   
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }

   
}

function validar(obj) {
    return Object.values(obj).every(input => input !== '');
}

export default guardarTestimonial;