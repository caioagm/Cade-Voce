#Cadê Você?

# 🚨 Sistema de Registro de Pessoas Desaparecidas

---

## 1 - Apresentação da Ideia

Este projeto foi desenvolvido a partir do desafio sobre enchentes no Brasil, proposto no ciclo Empower 5.0. Ao analisar o cenário, identifiquei a dificuldade relacionada à **organização de informações sobre pessoas desaparecidas**, o que motivou a criação desta solução.

Durante situações de desastre, muitas pessoas se separam de familiares e enfrentam dificuldades para obter informações confiáveis. Pensando nisso, surgiu a ideia de desenvolver um sistema simples que centralize esses dados e facilite o acesso às informações.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2 - Problema Escolhido

O problema escolhido foi o **registro de pessoas desaparecidas durante enchentes**.

Em situações de emergência, é comum que famílias se separem e não consigam se comunicar. As informações acabam sendo compartilhadas em diferentes canais, como redes sociais, o que gera:

* informações desencontradas
* falta de atualização
* dificuldade de organização
* demora para encontrar pessoas

As principais pessoas impactadas são:

* familiares de desaparecidos
* voluntários
* equipes de resgate

Esse problema é relevante porque a falta de organização das informações pode atrasar reencontros e aumentar o sofrimento das pessoas envolvidas.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 3 - Solução Proposta

A solução desenvolvida consiste em um sistema web simples para **registro e gerenciamento de pessoas desaparecidas**.

O sistema permite:

* cadastrar pessoas desaparecidas
* visualizar todos os registros
* atualizar informações (status e observações)
* remover registros

A ideia principal é centralizar as informações em um único lugar, facilitando o acesso e a organização dos dados.

O diferencial da proposta é a simplicidade e facilidade de uso, permitindo que qualquer pessoa consiga utilizar o sistema rapidamente, mesmo em situações de emergência.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 4 - Estrutura do Sistema

O sistema foi desenvolvido utilizando uma arquitetura simples, dividida em três partes:

### 🔹 Front-end

O front-end foi desenvolvido em HTML com JavaScript puro.

O usuário pode:

* cadastrar novos desaparecidos
* atualizar informações
* visualizar a lista completa
* remover registros

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 Back-end

O back-end foi desenvolvido com Node.js utilizando o framework Express.

Ele é responsável por:

* receber requisições do front-end
* processar os dados
* executar operações no banco de dados
* retornar respostas para o cliente

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 🔹 Banco de Dados

Foi utilizado o SQLite como banco de dados local.

Os dados armazenados incluem:

* nome
* contato
* endereço
* status
* observações
* foto (URL)

O banco permite persistir as informações e organizar os registros de forma estruturada.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🚀 Considerações Finais

Este projeto demonstra a aplicação prática de conceitos de desenvolvimento web, incluindo integração entre front-end, back-end e banco de dados.

A solução busca atender a um problema real, propondo uma forma simples e funcional de organizar informações em situações de emergência.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
