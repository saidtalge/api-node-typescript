
# Projeto de API com Node.js e TypeScript, seguindo Clean Architecture

Este projeto consiste no desenvolvimento de uma API utilizando Node.js e TypeScript, estruturada com base nos princípios da Clean Architecture para garantir separação de responsabilidades e maior flexibilidade na manutenção e escalabilidade do código.

## Recursos e Tecnologias Utilizadas:

*Node.js*: Para a construção da API backend com foco em performance e escalabilidade.
*TypeScript*: Fornecendo tipagem estática e maior robustez ao desenvolvimento.
*Clean Architecture*: Garantindo um design modular, desacoplado e de fácil extensão.
*Docker*: Para a criação de ambientes consistentes e escaláveis para a aplicação.
*PostgreSQL e MongoDB*: Bancos de dados relacional e NoSQL, respectivamente, utilizados para atender diferentes necessidades de armazenamento e consulta de dados.

## Executar

```bash

#Copia o .env e preenche conforme sua necessidade
cp .env.example .env

# Pre-requisitos o docker instalado
docker compose build
docker compose up -d

```