//import { render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp'
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'


describe('Prueba primeraApp componente', () => {

//esta prueba depende de extend-expect que esta comentado en setupTest.js
/* 
    test('debe mostrar el mensaje Hola, soy dairo', () => {
        const saludo = 'Hola, soy dairo';
        const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
        expect( getByText(saludo) ).toBeInTheDocument();
    }) */
    

    test('debe mostrar <PrimeraApp /> correctamente ', () => {
        const saludo = 'Hola, soy dairo'
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );
        expect ( wrapper ).toMatchSnapshot()
    });

    test('debe mostrar el subtitulo enviado ', () => {
        const saludo = 'Hola, soy dairo'
        const sub = 'Soy un subtitulo'

        const wrapper = shallow( 
            <PrimeraApp
                saludo={ saludo }
                subtitulo={ sub }
            />
        );
        const textoSubtitulo = wrapper.find('h2').text();
        expect (sub).toBe(textoSubtitulo)
    })
})
