const title = 'Agregar al listado principal el campo "dirección"  y quitar el campo "fecha"'
const page = 'https://practica2-chavez.paiza-user.cloud/~ubuntu/practica2-chavez/index.php'

describe(title, () => {
    
    it('Visitar pagina [PAIZA]', () => cy.visit(page));

    it('Revisar "Télefono" en la tabla', () => {
        cy.contains('Télefono')
    });

    it('Revisar "Télefono" en el formulario agregar', () => {
        // Abriendo modal
        cy.get('#btn-add').click()

        // Escribiendo en el formulario
        cy.get('#nombre-input').type('Gerry');
        cy.get('#direccion-input').type('Colima');
        cy.get('#telefono-input').type('3122008570');

        // Submit
        cy.get('#btn-add-submit').click()
    });
    
    it('Revisar "Télefono" en el formulario agregar', () => {
        // Abriendo modal
        cy.get('#btn-update').click();

        // Escribiendo en el formulario
        cy.get('#nombre-input').type('Gerardo');
        cy.get('#direccion-input').type('Villa de Álvarez');
        cy.get('#telefono-input').type('3126003215');

        // Submit
        cy.get('#btn-cancel-submit').click()
    });
});