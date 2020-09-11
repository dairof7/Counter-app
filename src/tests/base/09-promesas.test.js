import { getHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas promesas', () => {
    test('getHeroeByIdAsync return: hereo por id asincrono', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {        
                expect ( heroe ).toBe( heroes[0] );
                done();
            })
    });
    
    test('getHeroeByIdAsync return: hereo por id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {        
                expect ( error ).toBe( 'No se pudo encontrar el héroe' );
                done();
            })
    });
    

})
