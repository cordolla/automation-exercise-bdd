Feature: Cadastro de Novo Usuário - Aprovação e email ja cadastrado.

  Background:
    Given que eu estou na pagina inicial
    When eu clico no botao 'Signup / Login'
    And eu preencho o campo 'Name' com 'Marcelo'


  @Cadastro @CT-001 @CaminhoFeliz
  Scenario: Cadastro de usuário com dados válidos e unicos  
    And eu preencho o campo 'Email Address' com email valido unico
    Then eu clico no botao 'Signup'
    When eu seleciono o titulo 'Mr'
    And eu preencho o campo 'Password' com 'SenhaSegura123'
    And eu preencho os campos de data de nascimento
    And eu seleciono a opcao 'Sign up for our newsletter!'
    And eu seleciono a opcao 'Receive special offers from our partners!'
    And eu preencho os campos de First Name, Last Name, Company, Address, Country, State, City, Zipcode e Mobile Number
    When eu clico no botao 'Create Account'
    Then eu verifico que a mensagem 'ACCOUNT CREATED!' é exibida
    When eu clico no botao 'Continue'
    Then eu verifico que estou logado como 'Marcelo'

  @Cadastro @CT-002 @CaminhoTriste
  Scenario: Tentativa de cadastro com email já cadastrado 
    And eu preencho o campo 'Email Address' com email ja cadastrado
    Then eu clico no botao 'Signup'
    Then eu verifico que a mensagem 'Email Address already exist!' é exibida
    