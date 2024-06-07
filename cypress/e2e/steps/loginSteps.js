/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
require('cypress-xpath');

// Contexto
Given("que acesso o site {string}", (url) => {
  cy.visit(url);
});

// Cenário: Login válido
When("eu informo o email válido {string}", (email) => {
  if (email != "") {
    cy.get("#username").type(email);
  }
});

And("digito a senha {string}", (senha) => {
  if (senha != "") {
    cy.get("#password").type(senha);
  }
});

And("confirmo", () => {
  cy.get('button[name="submitBtn"]').click();
});

Then("exibe {string}", (texto) => {
  cy.get("body").then(($body) => {
    if ($body.text().includes("EDSON HENRIQUE DOS SANTOS")) {
      console.log('o texto "EDSON HENRIQUE" exite na pagina');
    } else {
      console.log('o texto "EDSON HENRIQUE" does not exist on the page');
    }
  });
});

// Troca de senha
When("eu clico em {string}", (texto) => {
  cy.get("a").contains(texto).click();
});

And("digito o cpf {string}", (cpf) => {
  if (cpf != "") {
    cy.get("#identificacao").type(cpf);
  }
});

And("recupero senha", () => {
  cy.xpath('//*[@id="b-recuperar"]').click();
});

Then("aparece tela para colocar codigo de recuperação", () => {
  cy.get("#sp-destinatario").then(($element) => {
    if ($element.length > 0) {
      console.log('The element with id "sp-destinatario" exite na pagina');
    }
  });
});

// Cenário: Login invalido
When("eu informo usuario invalido {string}", (email) => {
  if (email != "") {
    cy.get("#username").type(email);
  }
});

And("uma senha invalida {string}", (senha) => {
  if (senha != "") {
    cy.get("#password").type(senha);
  }
});

And("confirmo o login", () => {
  cy.get('button[name="submitBtn"]').click();
});

Then("exibe a classe {string}", (texto) => {
  cy.get("#alerta").then(($alerta) => {
    $alerta.hasClass(texto);
  });
});

// Cenário: Deslogar do sistema
When("eu informo o usuario válido {string}", (email) => {
  if (email != "") {
    cy.get("#username").type(email);
  }
});

And("coloco a senha valida {string}", (senha) => {
  if (senha != "") {
    cy.get("#password").type(senha);
  }
});

And("faço login", () => {
  cy.get('button[name="submitBtn"]').click();
});

And("exibe {string}", (texto) => {
  cy.get("body").then(($body) => {
    if ($body.text().includes("EDSON HENRIQUE DOS SANTOS")) {
      console.log('o texto "EDSON HENRIQUE" exite na pagina');
    }
  });
});

And("aperto {string}", (texto) => {
  if (texto != "") {
    cy.wait(5000);
    cy.xpath('//*[@id="content"]/div/p[2]/a').click();
  }
});

Then("exibe a mensagem {string}", (texto) => {
  cy.get("body").then(($body) => {
    if ($body.text().includes(texto)) {
      console.log('o texto "Deslogado" exite na pagina');
    }
  });
});

//Cenário: Campo de código de 6 dígitos vazio
When("eu clico em {string}", (texto) => {
  cy.get("a").contains(texto).click();
});

And("digito o cpf {string}", (cpf) => {
  if (cpf != "") {
    cy.get("#identificacao").type(cpf);
  }
});

And("clico no botão de Prosseguir", (cpf) => {
  cy.get('#b-recuperar.primario').click();
});

And("confirmo o código", () => {
  cy.get('#b-recuperar.primario').click();
});

Then("exibe a classe {string}", (texto) => {
  cy.get("#alerta").then(($alerta) => {
    $alerta.hasClass(texto);
  });
});
