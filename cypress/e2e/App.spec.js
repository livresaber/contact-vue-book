describe('Home Page', () => {
  it('content header', () => {
    cy.visit('/')
    cy.get('[alt="Vue logo"]').should('exist')
    cy.get('[aria-label="Campo de pesquisa para buscar contato"]').should('not.exist')
  })
  it('visits home page valid texts empty', () => {
    cy.contains('Crie uma lista de contatos de forma uma simples')
    cy.contains('Novo Contato')
  })
  it('create a contact', () => {
    cy.contains('Novo Contato').click()
    cy.get('input[name="name"]').type('Lucas Ferreira de Lima')
    cy.get('input[name="email"]').type('lucasferreiralimax@gmail.com')
    cy.get('input[name="phone"]').type('(82) 99931-9097')
    cy.contains('Salvar').click()

    cy.contains('Novo Contato').click()
    cy.get('input[name="name"]').type('Criar Art')
    cy.get('input[name="email"]').type('contato@criar.art')
    cy.get('input[name="phone"]').type('(82) 99931-9097')
    cy.contains('Salvar').click()
  })
  it('valid contact created', () => {
    cy.contains('Lucas Ferreira de Lima')
    cy.contains('lucasferreiralimax@gmail.com')
    cy.contains('(82) 99931-9097')
  })
  it('edit contact', () => {
    cy.get('[aria-label="Botão para edição do contato Lucas Ferreira de Lima"]').click()
    cy.get('input[name="email"]').clear()
    cy.get('input[name="email"]').type('contato@criar.art')
    cy.contains('Salvar').click()
  })
  it('remove contact', () => {
    cy.get('[aria-label="Botão para exclusão do contato Criar Art"]').click()
    cy.get('[aria-label="Botão para excluir o contato selecionado Criar Art"]').click()
  })
})

describe('About Page', () => {
  it('content header', () => {
    cy.visit('/about')
    cy.get('[alt="Vue logo"]').should('exist')
    cy.get('[aria-label="Campo de pesquisa para buscar contato"]').should('not.exist')
  })
  it('validation author', () => {
    cy.contains('Lucas Ferreira de Lima é um Front-end que trabalha com Vue, React e Angular')
    cy.get('[href="https://github.com/livresaber/contact-vue-book"]').should('exist')
    cy.get('[href="https://lucas-frontend.web.app"]').should('exist')
  })
  it('clear data register', () => {
    cy.visit('/')
    localStorage.removeItem("my-contact")
  })
})

