// ouvidoria.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Realizar Cadastro na Ouvidoria', () => {
    it('Deverá conseguir preencher o cadastro da ouvidoria com sucesso', () => {
        cy.visit('https://beta.nucleogov.com.br/cidadao/ouvidoria/inicio')

        cy.wait(7000)

        cy.contains('Sugestão').click()

        cy.wait(7000)

        cy.contains('label', 'Assunto')
        .parent()
        .find('.selected').click()
        cy.contains('a', 'Abastecimento').should('have.attr', 'href', '1').click();
      
        cy.get('#mensagem').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

        cy.contains('label', 'Departamento')
        .parent()
        .find('.selected').click()
        cy.contains('a', 'GABINETE DO PREFEITO ').should('have.attr', 'href', '92').click();

        cy.get('#buttons_next').click()

        cy.wait(7000)
        
        cy.get('.selected').click()
        cy.contains('Outro').click()

        cy.get('#tipo_identificacao').type('Documento de Teste')

        cy.get('#numero_identificacao').type('40028922')
    
        cy.get('#buttons_next').click()

        cy.get('.step_usuario_cadastrado_identificacao_nome').then(($usuario_cadastro) => {
            if ($usuario_cadastro.find('Teste feito pelo Cypress').length > 0) {
              // Se encontrou o elemento
              cy.get('#nome').type('Teste feito pelo Cypress')
      
              cy.get('#data_nasc').type('19/07/2004')
      
              cy.get('#sexo').click()
              cy.contains('Masculino').click()
      
              cy.get('#pais_id').click()
              cy.contains('Brasil').click()
      
              cy.get('#estado_id').click()
              cy.contains('GO').click()
      
              cy.get('#cep').type("74215-010")
      
              cy.get('#endereco').type("Av. T-2, 39 - Qd 107 - Lt 7 - St. Bueno, Goiânia - GO")
      
              cy.get('#buttons_next').click()
            } else {
              // Se não encontrou, segue outro fluxo
              cy.log('Nenhum erro encontrado');
              cy.get('#buttons_next').click();
            }
          });
      
          cy.wait(2000)

          cy.get('#email').then(($input_email) => {
            const valor = $input_email.val();
          
            if (valor) {
              // Campo está preenchido — segue o fluxo
              cy.log('Campo já preenchido');
              cy.get('#buttons_next').click()
            } else {
              // Campo vazio — preenche antes de prosseguir
              cy.get('#email').type("felipe@nucleogov.com.br")
              cy.get('#telefone').type("62992671470")
              cy.get('#buttons_next').click()
            }
          });
      
          cy.wait(2000) //Aguarda 2s

          cy.get('.step_manifestacao_enviada_bt_acompanhar').click()
          
    });
});
