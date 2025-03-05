# Usando Node.js como base
FROM node:18

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários e instalar dependências
COPY package.json package-lock.json ./
RUN npm install

# Copiar código-fonte
COPY . .

# Build da aplicação
RUN npm run build

# Expor porta do frontend
EXPOSE 3000

# Iniciar o servidor
CMD ["npm", "run", "dev"]
