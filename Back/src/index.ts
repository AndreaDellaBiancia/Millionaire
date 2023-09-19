// Importation du module HTTP pour créer un serveur
const http = require('http');

// Importation de l'application express depuis le fichier 'app.js'
const apps = require('./app.ts');

// Fonction pour normaliser le port d'écoute du serveur
const normalizePort = (val: any ) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val; // Si ce n'est pas un nombre, renvoie la valeur telle quelle
  }
  if (port >= 0) { 
    return port; // Si le port est un nombre positif, renvoie le port 
  }
  return false; // Sinon, renvoie false
};

// Récupération du port à partir des variables d'environnement ou utilisation du port 3000 par défaut
const port = normalizePort(process.env.PORT || '5000');
apps.set('port', port);

// Fonction de gestion des erreurs du serveur
const errorHandler = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' nécessite des privilèges élevés.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' est déjà utilisé.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Création du serveur HTTP en utilisant l'application express
const server = http.createServer(apps);

// Gestion des erreurs du serveur
server.on('error', errorHandler);

// Événement de démarrage du serveur
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('En écoute sur ' + bind);
});

// Écoute du serveur sur le port spécifié
server.listen(port);