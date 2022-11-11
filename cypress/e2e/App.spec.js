describe('Home Page', () => {
  it('content header', () => {
    cy.visit('/')
    cy.get('[alt="Vue logo"]').should('exist')
    cy.get('[alt="Ubook logo"]').should('exist')
    cy.get('[aria-label="Campo de pesquisa para buscar contato"]').should('exist')
  })
  it('visits home page valid texts empty', () => {
    cy.contains('Nenhum contato foi criado ainda.')
    cy.contains('Criar contato')
  })
  it('create a contact', () => {
    cy.contains('Criar contato').click()
    cy.get('input[name="name"]').type('Lucas Ferreira de Lima')
    cy.get('input[name="email"]').type('lucasferreiralimax@gmail.com')
    cy.get('input[name="phone"]').type('(82) 99931-9097')
    cy.contains('Salvar').click()

    cy.contains('Criar contato').click()
    cy.get('input[name="name"]').type('Elen Souza')
    cy.get('input[name="email"]').type('elen.souza@clicksign.com')
    cy.get('input[name="phone"]').type('(11) 94172-8594')
    cy.contains('Salvar').click()

    cy.contains('Criar contato').click()
    cy.get('input[name="name"]').type('Criar Art')
    cy.get('input[name="email"]').type('contato@criar.art')
    cy.get('input[name="phone"]').type('(82) 99931-9097')
    cy.contains('Salvar').click()
  })
  it('valid contact created', () => {
    cy.contains('Lucas Ferreira de Lima')
    cy.contains('lucasferreiralimax@gmail.com')
    cy.contains('(82) 99931-9097')

    cy.contains('Elen Souza')
    cy.contains('elen.souza@clicksign.com')
    cy.contains('(11) 94172-8594')
  })
  it('edit contact', () => {
    cy.get('[aria-label="Botão para edição do contato Lucas Ferreira de Lima"]').click()
    cy.get('input[name="email"]').clear().type('contato@criar.art')
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
    cy.get('[alt="Ubook logo"]').should('exist')
    cy.get('[aria-label="Campo de pesquisa para buscar contato"]').should('not.exist')
  })
  it('validation author', () => {
    cy.contains('Lucas Ferreira de Lima é um Front-end que trabalha com Vue, React e Angular')
    cy.get('[href="https://github.com/livresaber/contact-vue-book"]').should('exist')
    cy.get('[href="https://lucas-frontend.web.app"]').should('exist')
  })
})

