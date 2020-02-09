describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("l.chacon@uniandes.edu.co")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("Uniandes2020")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.contains('Busca un profesor o materia...').click().type('Mario Linares Vasquez')
		cy.contains('Mario Linares Vasquez - Ingeniería de Sistemas').click()
		cy.get('[name="id:MISO4208"]').click()		
    })
})