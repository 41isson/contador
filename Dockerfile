# Etapa de build
FROM node:22.3.0 AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie apenas os arquivos de dependências primeiro
COPY package*.json ./

# Instale o Ionic e Angular CLI nas versões específicas globalmente
RUN npm install -g @ionic/cli@7.2.0 @angular/cli@18.1.2

# Instale as dependências do projeto
RUN npm install --legacy-peer-deps

# Copie o restante do código da aplicação
COPY . .

# Compile a aplicação
RUN npm run build

# Etapa de produção
FROM node:22.3.0

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos compilados da etapa de build
COPY --from=build /app/www /app/www

# Instale apenas as dependências de produção
COPY package*.json ./
RUN npm install --only=production --legacy-peer-deps

# Exponha a porta que a aplicação irá rodar
EXPOSE 8100

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["ionic", "serve", "--host", "0.0.0.0"]
