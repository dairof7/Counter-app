
import { getUser, getUsuarioActivo } from '../../bases/05-funciones'



describe('Pruebas funciones', () => {
    
    test('getUser- return: Objeto!', () => {
      const user = {
        uid: 'ABC123',
        username: 'Emilio'
      }

      const res = getUser();
      //toEqual lo usamos para evaluar objetos
      expect ( res ).toEqual( user );

    })

    test('getUsuarioActivo- return: Objeto', () => {
        const nombre = 'Dairo'
        const user = {
            uid: 'ABC567',
            username: nombre 
        }

        const res = getUsuarioActivo(nombre)

        expect ( res ).toEqual( user )
    })

})
