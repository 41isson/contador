# Use uma imagem base do Node.js com uma versão compatível
FROM node:22.3.0

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale o Ionic e Angular CLI nas versões específicas
RUN npm install -g @ionic/cli@7.2.0 @angular/cli@18.1.2

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que a aplicação irá rodar
EXPOSE 8100

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["ionic", "serve", "--host", "0.0.0.0"]
