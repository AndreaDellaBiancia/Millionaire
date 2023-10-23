FROM node:16 AS builder

WORKDIR /app

# Copiez le fichier package.json séparément pour tirer parti du cache Docker
COPY package*.json ./
RUN npm install

# Copiez les fichiers source
COPY tsconfig.json ./
COPY public/ public/
COPY src/ src/

# Exécutez la commande pour démarrer l'application React
CMD ["npm", "start"]
