# Proxy Cache Server

O **Proxy Cache Server** é uma solução de cache simples e eficiente para armazenar temporariamente os resultados de requisições HTTP. Esse servidor atua como intermediário entre o cliente e um servidor de destino, encaminhando as requisições e armazenando os resultados em cache. O cache pode ser armazenado na memória ou em Redis, dependendo da configuração, otimizando o tempo de resposta para requisições subsequentes.

## Como Funciona

O servidor recebe requisições e as repassa para a rota definida, armazenando a resposta no cache. Quando a mesma requisição for feita novamente, a resposta é servida diretamente do cache, reduzindo a latência e a carga no servidor de destino.

- **Memória**: O cache é mantido na memória, adequado para casos em que o volume de dados é pequeno e a persistência não é necessária.
- **Redis**: O cache é mantido no Redis, proporcionando escalabilidade, persistência e maior controle sobre o gerenciamento do cache.

### Configuração de Cache

O comportamento do cache pode ser ajustado com as variáveis de ambiente:

- **CACHE_TTL**: Define o tempo de vida do cache em segundos.
- **CACHE_TYPE**: Escolha entre `'MEMORY'` ou `'REDIS'` para decidir onde o cache será armazenado.

## Instalação

Siga os passos abaixo para instalar e rodar o projeto:

### 1. Clonar o Repositório

```bash
git clone https://github.com/WesleyParastchuk/caching-proxy-server.git
cd caching-server
```

### 2. Instalar Dependências

Instale as dependências do projeto utilizando o npm:

```bash
npm install
```

### 3. Configuração do `.env`

Crie um arquivo `.env` com as variáveis de configuração. Abaixo está um exemplo de configuração:

```env
NODE_ENV=development
PORT=3000
ORIGIN=https://api.destino.com

CACHE_TTL=3600  # Tempo de vida do cache em segundos
CACHE_TYPE=MEMORY  # Ou 'REDIS'

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=0
```

- **NODE_ENV**: Defina como `production` ou `development`.
- **PORT**: Porta em que o servidor irá rodar.
- **ORIGIN**: A URL do servidor de destino para onde as requisições serão encaminhadas.
- **CACHE_TTL**: O tempo em segundos que o cache será mantido. Após esse tempo, o valor será expirado e uma nova requisição será feita.
- **CACHE_TYPE**: Se o cache será armazenado na **memória** ou no **Redis**.
- **REDIS_HOST**, **REDIS_PORT**, **REDIS_DB**: Parâmetros de configuração do Redis (caso o cache esteja configurado para usar Redis).

### 4. Rodando com Docker

Se preferir rodar o projeto com Docker, você pode utilizar os containers para facilitar o setup e a execução.

#### Passo 1: Criar o Arquivo `.env` para o Docker

Crie um arquivo `.env` com as mesmas variáveis de configuração mencionadas anteriormente.

#### Passo 2: Criar e Subir os Containers

Execute o comando abaixo para rodar o Docker Compose, que irá levantar o serviço com o Redis (caso esteja utilizando Redis para o cache):

```bash
docker-compose up --build
```

Isso irá criar e rodar os containers para o servidor e o Redis, se necessário.

### 5. Rodando o Servidor Localmente

Caso não queira usar o Docker, basta rodar o servidor localmente após ter configurado o `.env`:

```bash
npm start
```

O servidor será iniciado e estará disponível na porta configurada em `PORT`.

## Exemplo de Uso

Uma vez que o servidor esteja rodando, você pode fazer requisições para as rotas configuradas. Exemplo de requisição:

```bash
curl http://localhost:3000/sua-rota
```

Essa requisição será encaminhada para o servidor de destino configurado em `ORIGIN`. O resultado será armazenado no cache e, para as requisições subsequentes, a resposta será servida diretamente do cache.

## Docker Compose

Caso queira rodar o Redis via Docker Compose, o `docker-compose.yml` já está configurado no projeto. Para rodar o Redis e o servidor de cache, basta executar:

```bash
docker-compose up --build

## Como Funciona o Cache

- Ao receber uma requisição, o servidor verifica se a resposta para essa rota já está presente no cache.
- Se estiver, a resposta é retornada diretamente do cache.
- Caso contrário, a requisição é repassada para o servidor de destino e a resposta é armazenada no cache.
- A expiração do cache é determinada pelo valor de `CACHE_TTL`. Após o tempo configurado, o cache será invalidado e uma nova requisição será feita.

## Contribuição

Contribuições são bem-vindas! Se você tiver ideias para melhorias ou correções, fique à vontade para abrir uma **issue** ou **pull request**.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```
