# Middleware da PokeAPI

Este projeto é um middleware desenvolvido em Node.js que consome a PokeAPI para retornar informações sobre os Pokémon. O objetivo deste middleware é fornecer uma rota que, ao ser acessada, retorna as habilidades de um Pokémon, ordenadas por ordem alfabética.

## Requisitos

Antes de rodar o projeto, você precisa ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [NPM](https://www.npmjs.com/) (gerenciador de pacotes)

## Instalação

1. Clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/SEU_USUARIO/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio

   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Após instalar as dependências, inicie o servidor com o seguinte comando:

   ```bash
   npm start

   ```

O servidor estará rodando em http://localhost:3000. <br><br>
Agora, você pode acessar a seguinte rota para buscar as habilidades de um Pokémon:

    GET http://localhost/api/pokemons/:poke_name

Substitua :poke_name pelo nome de qualquer Pokémon, por exemplo:

    GET http://localhost/api/pokemons/pikachu

## Exemplo de resposta:

    {
      "name": "pikachu",
      "abilities": [
        "lightning-rod",
        "static"
      ]
    }

A resposta será as habilidades do Pokémon ordenadas em ordem alfabética.

## Como funciona

Este middleware faz uma chamada à PokeAPI para obter as informações sobre o Pokémon fornecido na URL. Em seguida, ele extrai e ordena as habilidades do Pokémon em ordem alfabética, retornando essas informações como uma resposta JSON.

#### Endpoints

    GET /api/pokemons/:poke_name:

Retorna as habilidades de um Pokémon especificado na URL, ordenadas alfabeticamente.
<br><br>

## Exemplo de solicitação

Rota:

    /api/pokemons/pikachu

Resposta:

    {
      "name": "pikachu",
      "abilities": [
        "lightning-rod",
        "static"
      ]
    }

## Dependências

_express_: Framework minimalista para criar o servidor.
<br>
_axios_: Biblioteca para fazer requisições HTTP para a PokeAPI.
