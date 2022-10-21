import 'cypress-xpath';
import logIn from '../e2e/pages/login';
import credentials from '../e2e/pages/credentials';
import main from '../e2e/pages/main';

describe('Ebombo', () => {

  /* Cada vez que se corra el codigo sin cambiar el nombre de la dinamica
  la prueba va a dejar de fallar porque la misma ya carga en pantalla 
  
  -Después de crear la dinámica esta no aparece automáticamente 
  en la lista de juegos [esto debe lanzar un error].
  */
  let dinamic_name = 'Mi Nueva Dinamica'

  before(function(){
    /* Visitar Pagina */
    cy.visit('https://ebombo.com/en')
    cy.url().should('include', 'https://ebombo.com/en')
    cy.viewport(1280,800)
  })

  it('Click Login', () => {
    /* Clickear Boton Sing */
    logIn.clickSingIn();
  })

  it('Escribir credenciales', () => {

    /* testebombo@gmail.com */
    /* Po1234567 */
    /* Click Login */

    credentials.writeCredentials('testebombo@gmail.com','Po1234567');
    
  })

  it('Crear Dinamica', () => {

    /* Click Create */
    /* Click Dynamics */
    /* Click Ahorcado */

    main.createDynamic();

  })

  it('Configurar Dinamica', () => {
    /* Nombre Dinamica */
    main.nameDynamic(dinamic_name)
    /* Frases */
    /* Tiempo frases */  
    /* Boton Add */
 
    main.addWords('0','cypress','120');
    main.addWords('1','javascript','30');
    main.addWords('2','po','60');

    /* Boton Save */
    main.save();
  })

  it('Chequear Aparicion de Dinamica Automaticamente', () => {
    /* Busca Dinamica */
    main.checkDynamic(dinamic_name)
  })
})

  

