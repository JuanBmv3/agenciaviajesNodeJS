import {Viaje}  from '../models/Viaje.js'
import {Testimonial}  from '../models/Testimoniales.js'


const paginaInicio = async (req, res) => {


    const promiseDB = [];

    // 3 viajes
    promiseDB.push( Viaje.findAll({limit: 3}))
    // 3 testimoniales
    promiseDB.push( Testimonial.findAll({limit: 3}))

    try {
       
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            titulo: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }

   
};

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            titulo: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        
    }

    
};

const paginaViajes = async (req, res) => {

    //Constultar BD
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        titulo: 'Viajes',
        viajes
    });
}

const paginaDetalleViaje = async (req, res) => {

    const {slug} = req.params;

    try{
        const viaje = await Viaje.findOne({where: {slug}});

        res.render('viaje',{
            titulo: 'Informacion Viaje',
            viaje
        })
    }catch(error){
        console.log(error)
    }
}


const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        titulo: 'Nosotros'
    });
}

export {
    paginaInicio,
    paginaTestimoniales,
    paginaViajes,
    paginaNosotros,
    paginaDetalleViaje
}