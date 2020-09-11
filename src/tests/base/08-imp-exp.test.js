import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp';
import heroes from '../../data/heroes';


describe('prueba imports', () => {
    test('getHeroeById, return: un heroes por id ', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        const heroesData = heroes.find( h => h.id === id )
        expect ( heroe ).toEqual( heroesData );
    })
    
    test('getHeroeById, return: undefined si heroes no existe ', () => {
        const id = 21;
        const heroe = getHeroeById( id );
        expect ( heroe ).toEqual( undefined );
    })

    test('getHeroesByOwner, return: los heroes del owner correspondiente ', () => {
        const owner = 'DC';
        const heroeByOwner = getHeroesByOwner ( owner );
        //console.log(heroe)
        const res =  heroes.filter( (h) => h.owner === owner );
        expect ( heroeByOwner ).toEqual( res );
    })

    test('getHeroesByOwner, return: los heroes del owner correspondiente ', () => {
        const owner = 'Marvel';
        const heroeByOwner = getHeroesByOwner ( owner );
        //console.log(heroeByOwner.length)
        expect ( heroeByOwner.length ).toBe( 2 );
    })

})
