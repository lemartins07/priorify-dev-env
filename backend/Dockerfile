# Usa a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código para dentro do container
COPY . .

# Expor a porta 4000 para acesso à API
EXPOSE 4000

# Comando para rodar em desenvolvimento (hot reload)
CMD ["npm", "run", "start:dev"]
