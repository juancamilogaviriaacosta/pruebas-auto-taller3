//PRUEBA 1 login exitoso
describe('Los estudiantes login exitoso', function() {
    it('Los estudiantes login exitoso', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("cosmefulanitog88@gmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("cosmefulanitog88")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.get('.dropdown').find('button[id="cuenta"]').click()
    })
})

//PRUEBA 2 creacion de usuario con usuario existente
describe('Creacion de cuenta con usuario existente', function() {
    it('Creacion de cuenta con usuario existente', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("pruebas")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("automaticas")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("cosmefulanitog88@gmail.com")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("cosmefulanitog88")
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ocurrió un error activando tu cuenta')
    })
})

//PRUEBA 3 Busqueda por profesor
//PRUEBA 4 Filtro por materia del profesor
describe('Busqueda profesor y filtro por materia', function() {
    it('Busqueda profesor y filtro por materia', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.get('.Select-placeholder').click()
      cy.get('.Select-input').find('input[role="combobox"]').type("juan").wait('10000')
      cy.get('.Select-menu-outer').click()
      cy.wait('10000')
      cy.get('.materias').find('input[type="checkbox"]').check()
    })
})
