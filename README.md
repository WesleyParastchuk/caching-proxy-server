# Proxy Server com Cache

## Descrição

Este projeto é um servidor proxy que intercepta requisições e as encaminha para uma rota configurada via variável de ambiente. Ele armazena a resposta no cache, incluindo corpo, cabeçalhos e status da resposta. Quando a mesma requisição é feita novamente, o servidor retorna a resposta armazenada para otimizar o tempo de resposta e reduzir chamadas desnecessárias ao servidor de origem.

## Funcionalidades

- Encaminha requisições para um servidor de destino definido no `.env`
- Armazena as respostas em cache
- Retorna `X-Cache: HIT` quando a resposta é servida do cache
- Retorna `X-Cache: MISS` quando a resposta é buscada do servidor de origem

## Configuração

1. Clone o repositório:

   ```sh
   git clone https://github.com/WesleyParastchuk/caching-proxy-server.git
   cd caching-proxy-server
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure o arquivo `.env`:

   ```env
   PORT=3000 # Porta do seu servidor
   ORIGIN=https://api.exemplo.com
   CACHE_TTL=60 # Tempo de vida do cache
   ```

4. Inicie o servidor:

   ```sh
   npm start
   ```

## Uso

Faça requisições para o proxy:

```sh
curl -i http://localhost:3000/minha-rota
```

### Exemplo de resposta

#### Primeira requisição (MISS - servidor de origem):

```http
HTTP/1.1 200 OK
X-Cache: MISS
Content-Type: application/json

{"message": "Resposta do servidor de origem"}
```

#### Segunda requisição (HIT - cache):

```http
HTTP/1.1 200 OK
X-Cache: HIT
Content-Type: application/json

{"message": "Resposta do servidor de origem"}
```

## Tecnologias

- Nest.js
- TypeScript

## Melhorias Futuras

- Suporte a cache distribuído
- Configuração de políticas de expiração mais avançadas
- Logs detalhados para monitoramento

---

Desenvolvido por [Wesley Parastchuk](https://github.com/WesleyParastchuk/).
