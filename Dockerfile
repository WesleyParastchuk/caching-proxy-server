# Usar uma imagem base oficial do Node.js
FROM node:16

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências da aplicação
RUN npm install

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Construir a aplicação NestJS (transpilar TypeScript para JavaScript)
RUN npm run build

# Expor a porta em que o NestJS vai rodar
EXPOSE 3000

# Comando para rodar a aplicação no container
CMD ["npm", "run", "start:prod"]
