//rafcp      con este sale todo el componente
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ num=10 }) => {


    const [ counter, setCounter ] = useState( num );  //aqui se retorna un arreglo [valor, funcion]

    //esta funciona va a manejar el evento
    const handleAdd = () => {
        setCounter(counter + 1)
        //otra forma de hacerlo es con una funcion
        //setCounter( (c) => c + 1 )
    }

        const handleSub = () => {
            setCounter(counter - 1)
        }
        const handleReset = () => {
            setCounter(num)
        }
    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            
            {/* <button onClick={ (e) => { handleAdd (e) } }>Incrementar</button> */}
            {/* esto se puede reescribir asi y manejarlo con la funcion 
            el argumento 'e' que viene del evento se pasa a la funcion handleAdd */}
            <button onClick={ handleAdd } >Incrementar</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSub } >Decrementar</button>

            {/* si se pone la funcion de esta manera () se va a ejecutar antes del
            evento es decir cuando ejecuta el codigo por primera vez
            <button onClick={ handleAdd() } >Incrementar</button> */}


        </>
    )
}
CounterApp.propTypes = {
num: PropTypes.number
}

export default CounterApp

