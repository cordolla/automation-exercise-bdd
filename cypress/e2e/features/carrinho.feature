Feature: Adicionar, Remover, Verificar produtos do carrinho.

    Background:
        Given que eu estou na pagina inicial
        When eu clico em 'Products' no menu superior
        Then eu verifico que a pagina 'All Products' é exibida
        And eu verifico se estou na pagina de todos os produtos

    @carrinho @CT-001 @CaminhoFeliz
    Scenario: Adicionar produtos ao carrinho
        And eu adiciono o primeiro produto ao carrinho
        And eu clico no botao 'Continue Shopping'
        And eu adiciono o segundo produto ao carrinho
        And eu clico no botao 'View Cart'
        Then eu verifico se os produtos foram adicionados ao carrinho com sucesso
        And eu verifico seus preços, quantidade e total

    @carrinho @CT-002 @CaminhoFeliz
    Scenario: Aumentar a quantidade do produto e adicionar ao carrinho e verificar se a quantidade está exata
        And eu clico no 'View Product' do primeiro produto
        When eu verifico se os detalhes do produto estão visíveis
        And eu aumento a quantidade para 4
        And eu clico no botao 'Add to cart'
        And eu clico no botao 'View Cart' no modal
        Then eu verifico se a quantidade do produto no carrinho é exata
