
# Projeto de API com Node.js e TypeScript, seguindo alguns padrões Clean Architecture

Este projeto consiste no desenvolvimento de uma API utilizando Node.js e TypeScript, estruturada com base nos princípios da Clean Architecture para garantir separação de responsabilidades e maior flexibilidade na manutenção e escalabilidade do código.

Além disso, o projeto irá avançar e incluirá outros recursos, como integração com bases de dados relacionais e não relacionais, containerização com Docker e Docker Compose, Testes Automatizados, Autenticação com JWT, Redis.

## Recursos e Tecnologias Utilizadas:

- *Node.js*: Para a construção da API backend com foco em performance e escalabilidade.
- *TypeScript*: Fornecendo tipagem estática e maior robustez ao desenvolvimento.
- *Clean Architecture*: Garantindo um design modular, desacoplado e de fácil extensão.
- *Fastify/Express*: Frameworks utilizados na construção da API REST
<!-- - *Docker*: Para a criação de ambientes consistentes e escaláveis para a aplicação. -->
<!-- - *PostgreSQL e MongoDB*: Bancos de dados relacional e NoSQL, respectivamente, utilizados para atender diferentes necessidades de armazenamento e consulta de dados. -->

## Arquitetura

- *src/modulo*:
- *src/modulo/api*:
- *src/modulo/core*:
- *src/modulo/tests*: Irá conter todos os arquivos de testes de integração e unitário

## Versões

- node 18+

## Executar

```bash

#Copia o .env e preenche conforme sua necessidade
cp .env.example .env

git pull https://github.com/saidtalge/api-node-typescript.git

cd api-node-typescript

npm install

npx ts-node ./src/index.ts

```