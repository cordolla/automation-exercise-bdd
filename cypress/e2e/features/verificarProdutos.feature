Feature: Verificar todos os produtos e a pagina de detalhes do produto

  Background:
    Given que eu estou na pagina inicial
    When eu clico em 'Products' no menu superior
    Then eu verifico que a pagina 'All Products' é exibida
    And eu verifico se estou na pagina de todos os produtos

  @VerificarProdutos @CT-002 @CaminhoFeliz
  Scenario: Verificação da lista de produtos e detalhes do produto    
    When eu clico no 'View Product' do primeiro produto
    Then eu verifico se os detalhes estão visíveis: nome do produto, categoria, preço, disponibilidade, condição, marca

  @VerificarProdutos @CT-003 @CaminhoFeliz
  Scenario: Pesquisar produto
    And eu pesquiso por 'Dress' na barra de pesquisa
    Then eu verifico se os resultados da pesquisa mostram produtos relacionados a 'Dress'
