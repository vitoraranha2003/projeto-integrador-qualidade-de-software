# language: pt

Funcionalidade: Login do correios
  Descrição: Aqui testamos apenas a tela de login do site correios

  Contexto:
    Dado que acesso o site "https://cas.correios.com.br/login"

  Cenário: Login válido
    Quando eu informo o email válido "edson_henrique@yahoo.com.br"
    E digito a senha "#Correios2024"
    E confirmo
    Então exibe "EDSON HENRIQUE DOS SANTOS"

  Cenário: Troca de senha
    Quando eu clico em "Esqueci minha senha"
    E digito o cpf ""
    E recupero senha
    Então aparece tela para colocar codigo de recuperação

  Cenário: Login invalido
    Quando eu informo usuario invalido "teste123"
    E uma senha invalida "teste123"
    E confirmo o login
    Então exibe a classe "aberto"

  Cenário: Deslogar do sistema
    Quando eu informo o usuario válido "edson_henrique@yahoo.com.br"
    E coloco a senha valida "#Correios2024"
    E faço login
    E aperto "Sair"
    Então exibe a mensagem "Sucesso ao se deslogar"

  Cenário: Troca de senha inválida
    Quando eu clico em "Esqueci minha senha"
    E digito o cpf "12345678999"
    E clico no botão de Prosseguir
    E confirmo o código
    Então exibe a mensagem "CPF ou idCorreios não encontrado"
