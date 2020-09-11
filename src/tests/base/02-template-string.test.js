import '@testing-library/jest-dom'
import { getSaludo } from '../../bases/02-template-string';

describe ('Pruebas 02-template-string.js', () => {

    test('getSaludo - return: Hola Dairo!', () => {
        const nombre = 'Dairo';
        const saludo = getSaludo (nombre);
        expect (saludo).toBe('Hola ' + nombre + '!')
    })

    test('getSaludo sin argumento - return: Hola emilio!', () => {
        const nombre = 'emilio';
        const saludo = getSaludo ();
        expect (saludo).toBe('Hola ' + nombre + '!')
    })

});