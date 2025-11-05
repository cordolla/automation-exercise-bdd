Feature: Login e Logout de Usuário Existente

Background:
    Given que eu estou na pagina inicial
    When eu clico no botao 'Signup / Login'


  @Login @CT-003 @CaminhoFeliz
  Scenario: Login com usuário existente
    And eu preencho o campo 'Email Address' com credencias validas
    And eu preencho o campo 'Password' com uma senha valida
    When eu clico no botao 'Login'
    Then eu verifico que estou logado como 'Marcelo'
    And eu clico no botao 'Logout'
    Then eu verifico que sou redirecionado para a pagina de login

  @Login @CT-004 @CaminhoTriste
  Scenario: Login com dados invalidos
    And eu preencho o campo 'Email Address' com email inexistente
    And eu preencho o campo 'Password' com senha incorreta
    When eu clico no botao 'Login'
    Then eu verifico que uma mensagem de erro 'Your email or password is incorrect!' é exibida
