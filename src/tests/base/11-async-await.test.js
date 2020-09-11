import { getImagen } from '../../bases/11-async-await'


describe('Pruebas con async await', () => {

    test('getImagen, return: url', async() =>  {
        
        //se podria hacer tambien como el test de promesas, es decir con el done()
        //async siempre retorna una promesa
        const url = await getImagen();
        //console.log( url )
        expect ( typeof url).toBe( 'string' );
    })
    
    test('getImagen, return: url', async() =>  {
        
        //se podria hacer tambien como el test de promesas, es decir con el done()
        //async siempre retorna una promesa
        const url = await getImagen();
        //console.log( url )
        expect ( url.includes('https://')).toBe( true );
    })

})
