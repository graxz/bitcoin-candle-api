## Sobre

Este projeto é uma API para o gerenciamento de candles para uma aplicação de análise de ações.

API de geração de candles: https://github.com/graxz/bitcoin-generate-candles

![image](https://github.com/graxz/bitcoin-candle-api/assets/60474834/7a8a9346-d259-44d1-b737-ecdcbe8e0291)

## Tecnologias utilizadas

- Typescript
- NodeJS
- Express
- MongoDB
- Docker

## Como executar

#### Pré-requisitos

O outro projeto deve estar rodando na porta 8080.

```bash
# Clone este repositório
$ git clone

# Acesse a pasta do projeto no terminal/cmd
$ cd bitcoin-candle-api

# Instale as dependências
$ npm install

# Execute o docker-compose
$ docker-compose up -d

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

## Endpoints

#### GET /candles/:quantity

Retorna as últimas :quantity candles.

## Licença

Este projeto está sob a licença MIT.
