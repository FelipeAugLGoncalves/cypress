// cypress/e2e/cadastro.cy.js
describe('Fluxo de Cadastro', () => {
  it('Deve preencher e enviar o formulário de cadastro com sucesso', () => {
    cy.visit('https://beta.nucleogov.com.br/cidadao/informacao/sic'); // acesso ao endereço do beta

    cy.wait(5000) // espera de 5s devido a net

    cy.contains('Fazer uma solicitação').click() //clica em fazer uma solicitação

    cy.wait(5000) //espera + 5s

    cy.get('#mensagem').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    cy.get('#buttons_next').click()

    cy.wait(5000) //espera 5s

    // O código acima é referente ao preenchimento da descrição e logo em seguida do click no botão com o id informado.

    cy.get('.selected').click() // Seleciona o campo de select e logo em seguida marca com o tipo outro
    cy.contains('Outro').click()

    cy.wait(2000)

    cy.get('#tipo_identificacao').type('Documento de Teste')

    cy.get('#numero_identificacao').type('40028922')

    cy.get('#buttons_next').click()

    cy.wait(2000)

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

    cy.contains('Sua solicitação foi enviada com sucesso.').should('be.visible') //Verifica se esta mensagem está na tela
    cy.get('.bt_copy').click()//encontra o botão copy e clica
    cy.get('.step_solicitacao_enviada_bt_acompanhar').click() //Verifica se a classe existe, se existir ele clicará

  });
});
