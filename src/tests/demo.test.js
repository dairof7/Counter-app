
describe ('Pruebas del archivo demo.test.js', () => {

    test('string iguales ', () => {
        const mensaje = 'Hola Mundo';
        
        const mensaje2 = `Hola Mundo`;

        expect( mensaje ).toBe( mensaje2 )
    })

});
