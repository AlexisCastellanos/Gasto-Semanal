import React,{useState} from 'react';
import Error from './Error'

const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {

    const [cantidad,guardarCamtidad]=useState(0);
    const [error,guardarError]=useState(false);

    const definirPresupuesto=(e)=>{
        guardarCamtidad(parseInt(e.target.value,10));
        console.log(cantidad);
    }


    const agregarPresupuesto=(e)=>{
        e.preventDefault();


        //Validar
        if(cantidad<1||isNaN(cantidad)){
            guardarError(true);
            return;
        }

        //si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }


    return (
        <React.Fragment>
            <h2>Coloca tu presupuesto</h2>
        {error?<Error mensaje='El presupuesto es incorrecto'/>:null}
            <form
                onSubmit={agregarPresupuesto}    
            >
            <input
                type='number'
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                onChange={definirPresupuesto}
            />
            <input
                type='submit'
                className='button-primary u-full-width'
                value='Definir tu presupuesto'
            />
            
            </form>
        </React.Fragment>
    );
};

export default Pregunta;