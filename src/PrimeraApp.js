//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'


//primera letra en mayuscula indica que es un componente
const PrimeraApp = ( {saludo='noname', subtitulo='Soy un subtitulo'} ) => {

    //const saludo = 'Hola ke ase';
    

    return (
    //aqui se puede usar un div, pero asi se evita llenar de divs innecesarios 
    
    <>
        {/* una forma de imprimir objetos en html
        <pre>{ JSON.stringify( saludo, null, 3 ) }</pre> */}
        <h1>{ saludo }</h1>
        <h2>{ subtitulo }</h2>
    </>
    );
} 
//de esta manera me aseguro que el tipo de entrada es del tipo deseado
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    //edad: PropTypes.number.isRequired

}

//otra forma de poner valores por default
//PrimeraApp.defaultProps = {
//    edad: 21
//}

/* //lo anterior tambien se puede hacer con un fragment
const PrimeraApp = () => {
    return (
    <Fragment>
        <h1>hola</h1>
        <h1>como estas</h1>
    </Fragment>
    );
} 
 */


export default PrimeraApp;