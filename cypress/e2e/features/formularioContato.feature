Feature: Enviar Mensagem pelo Formulário de Contato

  Background:
    Given que eu estou na pagina inicial
    When eu clico no link 'Contact Us'
    Then eu verifico que a pagina 'Contact Us' é exibida

  @FormularioContato @CT-001 @CaminhoFeliz
  Scenario: Envio de mensagem com dados válidos
    And eu preencho o formulario de contato com nome, email, assunto e mensagem válidos
    And eu carrego o arquivo 'imagem_teste.png' no campo 'Upload File'
    When eu clico no botao 'Submit'
    Then eu verifico que a mensagem 'Success! Your details have been submitted successfully.' é exibida