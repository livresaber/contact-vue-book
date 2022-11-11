describe('Home Page Empty', () => {
  it('visits home page valid texts empty', () => {
    cy.visit('/')
    cy.contains('Nenhum contato foi criado ainda.')
    cy.contains('Criar contato')
  })
})
