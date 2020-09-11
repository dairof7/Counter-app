import { retornaArreglo } from '../../bases/07-deses-arr'


describe('Pruebas en 07 deses', () => {

    test('prueba deses - return: numero y string', () => {
        
        //const arreglo = retornaArreglo();
        //expect( arreglo ).toEqual(['ABC', 123])

        //se puede verificar uno a uno verificando el tipo
        const [letras, num] = retornaArreglo();
        expect( letras ).toBe('ABC')
        expect( typeof letras ).toBe('string')
        expect( num ).toBe(123)
        expect( typeof num ).toBe('number')

    }) 
    
    
})
