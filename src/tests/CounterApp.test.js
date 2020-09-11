import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp';

describe('Prueba CounterApp componente', () => {


    //no es una buena practica poner el shallow......
    //pero se hace para no perder el asistente de visual
    let wrapper = shallow( <CounterApp /> );
    //esta funcion se ejecuta antes de cada prueba
    //rehacemos el wrapper cada vez
    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe mostrar CounterApp correctamete', () => {
        expect ( wrapper ).toMatchSnapshot();
    })
    
    test('debe mostrar CounterApp correctamete con valor de 100', () => {
        const valor = 100;
        const wrapper = shallow( <CounterApp num={ valor } /> )
        //trim borra los espacios alrededor de la variable
        const contador = wrapper.find('h2').text().trim()
        console.log(contador)
        expect (contador).toBe( String(valor) )
    })
    
    test('debe de incrementar con el boton incrementar', () => {
        //at me permite seleccionar el primer elemento encontrado
        wrapper.find('button').at(0).simulate('click');
        const contador = wrapper.find('h2').text().trim()
        expect (contador).toBe( '11' )
    })

    test('debe de decrementar con el boton decrementar', () => {
        //at me permite seleccionar el primer elemento encontrado
        wrapper.find('button').at(2).simulate('click');
        const contador = wrapper.find('h2').text().trim()
        expect (contador).toBe( '9' )
    })

    test('debe de colocar el valor por defecto del reset ', () => {
        const valor = 105;
        const wrapper = shallow( <CounterApp num={ valor } /> )
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const contador = wrapper.find('h2').text().trim()
        expect (contador).toBe( '105' )
        
        
    })
    
    
})
