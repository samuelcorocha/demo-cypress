describe('Teste End-to-End', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000/')
  })

  it('Visita a página', () => {
    cy.get('.books').should('be.visible')
  })

  it('Verifica item na página', () => {
    cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
  })

  it('Calcula frete', () => {
    cy.get('[data-id=3]').within(() => {
      cy.get('input').type('10000-000')
      cy.contains('Calcular Frete').click()
    })

    cy.wait(2000)
    cy.get('.swal-text').should('contain.text', 'O frete é: R$')
    cy.get('.swal-button').click()
  })

  it('Realiza a compra', () => {
    cy.get('[data-id=3]').within(() => {
      cy.contains('Comprar').click()
    })

    cy.wait(2000)
    cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso')
    cy.get('.swal-button').click()
  })
})